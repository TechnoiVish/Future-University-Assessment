import React from "react";
const BigButton = (props) => {
  return (
    <>
      <button
        onClick={props.getData}
        className='select-none rounded-lg bg-green-500 py-3 px-5 text-center align-middle font-sans text-sm font-bold uppercase text-white  transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"'
      >
        Add
      </button>
    </>
  );
};

export default BigButton;
