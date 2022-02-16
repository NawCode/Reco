import React from "react";

const ConstantSelect = React.forwardRef(
  ({ constObj, constLabels, ...props }, ref) => (
    <select {...props} ref={ref}>
      {Object.keys(constLabels).map((objKey, i) => (
        <option key={i} value={objKey}>
          {constLabels[objKey]}
        </option>
      ))}
    </select>
  )
);

export default ConstantSelect;
