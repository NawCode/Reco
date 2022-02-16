import { useNavigate } from "react-router-dom";

const PlaceInfo = (props) => {
  const navigate = useNavigate()
  return (
    <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-10 mt-2 bold hover:cursor-pointer transition ease-in duration-200 hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => navigate('/home')}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      <div className="flex items-center mx-10 mt-2 mb-2 border-4 rounded-lg border-black">
        <h2 className="p-4 flex justify-center text-center w-full text-2xl font-bold">
          {props.name}
        </h2>
      </div>
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="flex items-center justify-center w-4 h-4 my-1 "
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <a
          className="mx-2 font-bold transition duration-500 hover:text-white"
          href={`tel:${props.phone}`}
          target="_blank"
        >
          {props.phone}
        </a>
      </div>
      <div className="flex justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="flex items-center justify-center w-4 h-4 my-1"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <a
          className="mx-2 font-bold transition duration-500 hover:text-white"
          href={`https://www.google.com/maps/place/${props.address}`}
          target="_blank"
        >
          {props.address}
        </a>
      </div>
    </div>
  );
};

export default PlaceInfo;
