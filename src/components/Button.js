import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="py-1 px-3 rounded-lg mr-2 bg-gray-300 hover:bg-gray-400 inline-block active:bg-gray-500">
        {name}
      </button>
    </div>
  );
};

export default Button;
