const TeamCard = ({ children, firstName, job }) => {
  return (
    <div
      id="teamContainer"
      className="w-full bg-black bg-opacity-25 rounded-lg shadow-xl p-12 flex flex-col justify-center items-center hover:bg-black transition duration-500 ease-in-out"
    >
      <div className="mb-8">{children}</div>
      <div className="text-center">
        <p
          id="teamText"
          className="text-xl text-black font-bold mb-2 font-roboto"
        >
          {firstName}
        </p>
        <p
          id="teamText"
          className="text-base text-gray-900 font-normal font-roboto"
        >
          {job}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
