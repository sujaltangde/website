import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div style={{zIndex:'100'}} className="navBg shadow-sm fixed w-full flex  justify-around md:justify-evenly rounded-b-xl py-2  md:py-4 items-center">
        <div>
          <img src="/assets/navLogo.svg" className=" w-36 md:w-40" alt="" />
        </div>
        <div style={{zIndex:'100'}}>
          <ul className="text-white   hidden md:flex justify-center items-center gap-12 text-base">
            <Link className="navLink font-semibold ">Home</Link>
            <Link className="navLink font-semibold ">About Us</Link>
            <Link className="navLink font-semibold ">Roadmaps</Link>
            <Link className="navLink font-semibold ">Blogs</Link>
            <Link className="navLink font-semibold ">Events</Link>
            <Link className="navLink font-semibold ">Team</Link>
            <Link className="navLink font-semibold ">FAQs</Link>
          </ul>
        </div>

        <div className="md:ml-0 ml-6">
          <button className="text-white text-xs md:text-sm border-2 border-blue-500 rounded-3xl btn-bg py-0.5 font-semibold px-4 md:px-5">
            Join Us
          </button>
        </div>

        <button
          onClick={() => setToggle(!toggle)}
          className="md:hidden mr-2 text-white flex "
        >
          {toggle ? <RxCross1 size={24} /> : <HiMiniBars3 size={24} />}
        </button>
      </div>

      <div style={{zIndex:'100'}} className={`md:hidden ${toggle ? "flex" : "hidden"} `}>
        <ul style={{zIndex:'100'}} className="text-white fixed mt-12 pb-4 pt-6 flex flex-col w-full  navBg rounded-b-xl text-left px-6  items-start gap-4 text-base">
          <Link className="navLink font-semibold ">Home</Link>
          <Link className="navLink font-semibold ">About Us</Link>
          <Link className="navLink font-semibold ">Roadmaps</Link>
          <Link className="navLink font-semibold ">Blogs</Link>
          <Link className="navLink font-semibold ">Events</Link>
          <Link className="navLink font-semibold ">Team</Link>
          <Link className="navLink font-semibold ">FAQs</Link>
        </ul>
      </div>
    </>
  );
};
