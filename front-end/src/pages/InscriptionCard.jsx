import React, { useState, useEffect, useContext } from "react";
import PolygonCard from "../components/PolygonCard";
import { useNavigate, Link } from "react-router-dom";
import { fetchTags } from "../services/Api";
import userContext from "../components/Context/UserContext";
import "./inscriptionCard.css";
import { deleteUserTag, createUserTag, findUserWithId } from "../services/Api";
import PrivateLayout from "./PrivateLayout";

const InscriptionCard = () => {
  const { user, setUser } = useContext(userContext);
  const [tags, setTags] = useState([]);
  const [choices, setChoices] = useState(
    user ? user.tags.map((tag) => tag.tag) : []
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setTags(await fetchTags());
      console.log(user);
    };

    fetchData();
  }, []);

  function onChoiceChange(tag, selected) {
    if (selected) {
      setChoices([...choices, tag]);
    } else {
      setChoices(choices.filter((choice) => tag.id !== choice.id));
    }
  }

  function onSubmit() {
    navigate("/edit-profil");
  }

  return (
    <div>
      {user ? (
        <div>
          <h1 className="text-black font-bold text-2xl my-20 font-roboto">
            {" "}
            QU'AIMEZ VOUS SUIVRE ? FAITES VOTRE CHOIX
          </h1>

          <div id="choices" className="flex items-center">
            {tags.map((tag, index) => (
              <PolygonCard
                key={index}
                tag={tag}
                selected={
                  choices.find((choice) => choice.id === tag.id) !== undefined
                }
                onChange={onChoiceChange}
                deleteUserTag={deleteUserTag}
                createUserTag={createUserTag}
                findUserWithId={findUserWithId}
                user={user}
                setUser={setUser}
              />
            ))}
          </div>
          <Link to="/home" className="">
            <button
              className="buttonLink w-full hover:text-white"
              onClick={onSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span>VALIDER</span>
            </button>
          </Link>
        </div>
      ) : (
        <PrivateLayout />
      )}
    </div>
  );
};

export default InscriptionCard;
