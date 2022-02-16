import { useState } from "react";
import { getTagIcon } from "../services/Tags";

const ButtonMap = ({
  tag,
  label,
  setPaceFilter,
  placeFilter,
  setNewPlaceFilter,
  newPlaceFilter,
  arr,
}) => {
  const [isActive, setIsActive] = useState(false);

  const removeItemOnce = (arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const onButtonClick = () => {
    setIsActive(!isActive);

    if (placeFilter.includes(tag.id)) {
      removeItemOnce(placeFilter, tag.id);
      arr = [...placeFilter];
      setNewPlaceFilter(arr);
    } else {
      placeFilter.push(tag.id);
      arr = [...placeFilter];
      setNewPlaceFilter(arr);
    }
    console.log(newPlaceFilter);
  };
  const fetchPlaces = async (tagId) => {
    setPlace(await fetchPlacesWithType(tagId));
  };

  return (
    <div className="text-center">
      <button
        className={
          isActive
            ? "border-2 w-9 h-9 rounded-full  text-black border-black  text-2xl"
            : "border-2 w-9 h-9 rounded-full  text-white border-black  text-2xl"
        }
        onClick={() => onButtonClick()}
      >
        {getTagIcon(tag.label)}
      </button>
      <p className="my-1 mx-1">{tag.label}</p>
    </div>
  );
};

export default ButtonMap;
