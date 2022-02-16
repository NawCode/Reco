import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { search } from "../services/Api";

const SearchBar = ({ places, events }) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const onChange = async (searchValue) => {
    let matches = [];

    if (searchValue.length > 0) {
      const result = await search(searchValue);
      console.table(result);
      setSuggestions([...result]);
      console.log(suggestions);
    }

    setSearchValue(searchValue);
  };

  return (
    <form>
      <div className="flex h-12 border-2 border-black rounded w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mt-3 left-0 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Entrez lieu, évènement..."
          className="flex flex-col ml-2 bg-transparent w-full "
          onChange={(e) => onChange(e.target.value)}
          value={searchValue}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }}
        />
        <div className="absolute z-50 mt-12">
          {suggestions &&
            suggestions.map((suggestion, i) => (
              <div>
                <button
                  type="button"
                  onClick={() =>
                    suggestion.placeId
                      ? navigate(`/lieu/${suggestion.placeId}`)
                      : navigate(`/lieu/${suggestion.id}`)
                  }
                  key={i}
                  className="cursor-pointer hover:bg-black hover:text-white bg-white w-full text-left"
                >
                  {suggestion.name}
                </button>{" "}
              </div>
            ))}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
