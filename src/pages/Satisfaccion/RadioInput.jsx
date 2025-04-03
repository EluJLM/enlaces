import React from "react";

const RadioInput = ({ params = [], label, value, onChange, name }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="input-radio">
      <label className="titulo-radio">{label}</label>
      <div className="con-radio">
        {params.map((option, index) => (
          <label className="label-radio" key={index} >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
