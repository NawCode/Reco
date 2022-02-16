import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../services/Api";
import { getTagIcon } from "../services/Tags";
import userContext from "../components/Context/UserContext";
import Man from "../assets/man.png";
import Woman from "../assets/women.png";
import NonBinary from "../assets/Non-binarity.jpg";
import { toast } from "react-toastify";
import PrivateLayout from "./PrivateLayout";

const MyProfile = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  const onLogout = () =>
    toast.success("Déconnexion réussie", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const logout = () => {
    onLogout();
    setTimeout(() => window.open(`${API_URL}/auth/logout`, "_self"), 1000);
    setTimeout(() => navigate('/home'), 1050);

  };

  return (
    <div>
      {user ? (
        <section>
          <div
            id="profile-photo"
            className="pt-5 pb-5 flex items-center justify-center content-center"
          >
            {user && user.avatar !== null ? (
              <img
                className="object-cover w-40 h-40 rounded-full border-solid border-2 border-black sm:w-60 sm:h-60 sm:object-cover sm:border-4"
                src={user.avatar}
                alt="person"
              />
            ) : user && user.gender === 0 ? (
              <img
                className="object-cover w-40 h-40 rounded-full border-solid border-2 border-black sm:w-60 sm:h-60 sm:object-cover sm:border-4"
                src={Man}
                alt="person"
              />
            ) : user && user.gender === 1 ? (
              <img
                className="object-cover w-40 h-40 rounded-full border-solid border-2 border-black sm:w-60 sm:h-60 sm:object-cover sm:border-4"
                src={Woman}
                alt="person"
              />
            ) : (
              <img
                className="object-cover w-40 h-40 rounded-full border-solid border-2 border-black sm:w-60 sm:h-60 sm:object-cover sm:border-4"
                src={NonBinary}
                alt="person"
              />
            )}
          </div>

          <div className="flex justify-center items-center">
            <div id="profile-details" className="">
              <h1 className="text-3xl">
                {user && user.firstname} {user && user.lastname}
              </h1>
              <div className="flex flex-row mb-6 items-center content-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p >{user && user.email}</p>
              </div>
              <div id="modify" className="flex justify-center mt-3">
                <button
                  type="button"
                  className="bg-red-500 text-blue-100 py-2 px-4 rounded-lg hover:bg "
                  onClick={() => navigate("/edit-profil")}
                >
                  Modifier le profil
                </button>
              </div>
            </div>
          </div>

          <div className="w-full mb-4 pb-4 border-b border-20 border-black"></div>

          <div id="interet" className="flex flex-col items-center">
            <h2 className="text-3xl flex justify-center items-center py-3">
              Centres d'intérêt
            </h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              {user &&
                user.tags.map(({ tag }) => (
                  <>
                    <button className="border-2 w-9 h-9 rounded-full  text-black border-black  text-2xl text-white">
                      {getTagIcon(tag.label)}
                    </button>
                  </>
                ))}
            </div>
          </div>

          <div className="w-full mb-4 pb-4 border-b border-20 border-black"></div>

          <div id="modify" className="flex justify-center pb-6">
            <button
              className="bg-red-500 text-blue-100 py-2 px-4 rounded-lg hover:bg "
              onClick={logout}
            >
              Déconnexion
            </button>
          </div>
        </section>
      ) : (
        <PrivateLayout />
      )}
    </div>
  );
};

export default MyProfile;
