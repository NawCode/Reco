import React, { useState } from "react";

import TagBadge from "./TagBadge";

const PolygonCard = ({
  tag,
  selected = false,
  onChange,
  deleteUserTag,
  createUserTag,
  findUserWithId,
  user,
  setUser,
}) => {
  const [isSelected, setIsSelected] = useState(selected);

  async function onToggle() {
    if (isSelected) {
      await deleteUserTag(tag.id);
    }
    if (!isSelected) {
      await createUserTag(tag.id);
    }
    setIsSelected(!isSelected);
    onChange && onChange(tag, !isSelected);
    const result = await findUserWithId(user.id);
    setUser(result);
  }

  return (
    <button
      className="border-2 border-black rounded-full bg-white bg-opacity-40 font-roboto font-bold "
      onClick={onToggle}
    >
      <TagBadge
        tag={tag}
        className={
          !isSelected ? "bg-black text-white bg-opacity-50 rounded-full" : ""
        }
      />
    </button>
  );
};

export default PolygonCard;
