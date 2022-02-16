import { useState } from "react";

const Event = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setCount(1);
  };

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Europe/Paris",
  };

  return (
    <>
      <div className="flex items-center justify-center mb-4 mx-6 md:mb-8 lg:mb-10 xl:mb-12">
        <div className="flex flex-col justify-center w-full bg-white bg-opacity-40 rounded-lg shadow-lg">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-start p-2 leading-none text-white bg-black rounded-t-lg">
              <div>{new Date(props.date).toLocaleDateString()}</div>
              {/*<div>
                {new Intl.DateTimeFormat("en-GB", options).format(props.date)}
              </div>*/}
            </div>
            <div className="flex p-2 text-black">
              <h3 className="flex justify-start text-xl font-bold h-full my-auto w-4/6 leading-none tracking-tight text-black">
                {props.name}
              </h3>
              <div className="flex flex-col w-1/5">
                <a
                  className="flex justify-center w-full"
                  href={props.ticket}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 hover:text-indigo-600 transition duration-500 hover:scale-125 hover:cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                  </svg>
                </a>
                <div className="flex justify-center w-full text-xs">
                  réserver
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <button className="flex" onClick={handleClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 justify-start hover:text-indigo-600 transition duration-500 hover:scale-125 hover:cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </button>
                  <div className="flex align-center mt-3">+{count}</div>
                </div>
                <div className="flex justify-start w-full ml-1 text-xs">
                  reco
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
