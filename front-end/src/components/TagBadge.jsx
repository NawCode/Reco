import React from "react";
import { getTagIcon } from "../services/Tags";

export default function TagBadge({ tag, className = "", withLabel = true }) {
  return (
    <div className={`${className}`}>
      <p className="text-left text-black font-semibold">
        {getTagIcon(tag.label)}
      </p>

      {withLabel && tag.label}
    </div>
  );
}
