import { Link } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div>
      <h2 className="mt-20 mx-20 text-2xl text-center">
        Connecte-toi pour accéder à cette page
      </h2>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 m-auto mt-4 rounded hover:bg-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      </Link>
    </div>
  );
};
export default PrivateLayout;
