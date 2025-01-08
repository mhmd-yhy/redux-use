import React, {useState} from "react";
import {FaShoppingCart} from "react-icons/fa";
import {MdLightMode, MdNightlightRound} from "react-icons/md";
import Container from "./Container";

const NavBar = () => {
  const [ColorMood, setColorMood] = useState(true);
  const root = document.getElementById(`root`);
  if (ColorMood) {
    root.style.backgroundColor = `white`;
    root.style.color = "black";
  } else {
    root.style.backgroundColor = `black`;
    root.style.color = "grey";
  }
  return (
    // <Container>
    <div className="container m-auto px-4">
      <div className="flex justify-between items-center h-20">
        <div className="logo text-2xl font-extrabold tracking-widest">LOGO</div>
        <div className="flex gap-5 items-center">
          <input
            type="text "
            placeholder="Search"
            className="p-2 border border-neutral-400 rounded-lg text-neutral-400 outline-none flex-grow"
          />

          {ColorMood ? (
            <MdNightlightRound
              size={25}
              className="cursor-pointer"
              onClick={() => setColorMood(!ColorMood)}
            />
          ) : (
            <MdLightMode
              size={25}
              className="cursor-pointer"
              onClick={() => setColorMood(!ColorMood)}
            />
          )}
          <div className="relative">
            <FaShoppingCart size={25} className="cursor-pointer" />
            <span className="bg-red-700 text-xs text-white px-1 rounded-lg absolute -top-1 -right-1">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
    // </Container>
  );
};

export default NavBar;
//MdNightlightRound
