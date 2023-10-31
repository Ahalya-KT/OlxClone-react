import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Recoment = ({ item }) => {
  return (
    <div className="pt-9 px-11">
      <div className=" h-96">
        <div className="bg-white w-52 relative  ">
          <div className="px-7">
            <img src={item.image}></img>
          </div>
          <div className="px-5 py-2 ">
            <p className="font-bold">${item.price}</p>
            <p className="text-sm">{item.title}</p>
            <p className="text-xs text-gray-400">{item.category}</p>
          </div>

          <div className="bg-slate-50 rounded-full absolute top-2 right-2 w-7 h-6 flex items-center justify-center">
            <AiOutlineHeart />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Recoment;
