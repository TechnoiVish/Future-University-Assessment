import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox.tsx";
import SmallButton from "../Buttons/SmallButton.tsx";

const TodoRow = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div
        className=" container flex-row flex mt-6 "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p className="mt-2.5">
          <Checkbox />
        </p>
        <p className=" w-[310px] h-8 flex flex-row  rounded-lg text-2xl text-black">
          <ul className="list-unstyled row ml-3 mt-0.5">
            <li className="text-[20px]">{props.value}</li>
          </ul>
        </p>
        <div
          className="ml-6 delete"
          onClick={() => {
            props.sendData(props.id);
          }}
        >
          {hovered && <SmallButton />}
        </div>
      </div>
    </>
  );
};

export default TodoRow;
