import { Link } from "react-router-dom";
import { useContext } from "react";
import LinkButton from "./LinkButton";
import UserContext from "../components/Context/UserContext";
import { useNavigate } from "react-router-dom";
import Man from "../assets/man.png";
import Woman from "../assets/women.png";
import NonBinary from "../assets/Non-binarity.jpg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  return (
    <nav className="flex justify-evenly items-center h-16 text-white relative  font-mono z-0 ">
      <Link to="/contactez-nous" className="">
        <span className="h-12 flex rounded items-center px-2 justify-center uppercase font-nova effect-underline hover:bg-white hover:text-black hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          CONTACT
        </span>
      </Link>
      <Link to="/home" className="">
        <span className="h-12 flex rounded items-center justify-center uppercase font-nova effect-underline invert hover:invert-0 hover:bg-white hover:text-black hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
          <img className="w-8 mt-2" src={logo} />
        </span>
      </Link>

      {user && (
        <>
          {user.avatar !== null ? (
            <img
              src={user.avatar}
              className="h-1/2 rounded-full"
              onClick={() => navigate("/mon-profil/")}
            ></img>
          ) : user.gender == 0 ? (
            <img
              src={Man}
              className="h-1/2 rounded-full"
              onClick={() => navigate("/mon-profil/")}
            ></img>
          ) : user.gender == 1 ? (
            <img
              src={Woman}
              className="h-1/2 rounded-full"
              onClick={() => navigate("/mon-profil/")}
            ></img>
          ) : (
            <img
              src={NonBinary}
              className="h-1/2 rounded-full"
              onClick={() => navigate("/mon-profil/")}
            ></img>
          )}
        </>
      )}

      {!user && (
        <LinkButton
          link="/"
          className="buttonLink px-2 flex items-center justify-center hover:bg-white hover:text-black hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
          name="LOGIN"
        />
      )}
    </nav>
  );
};

export default Navbar;
