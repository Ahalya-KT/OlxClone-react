import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Cards = ({item}) => {
  return (
    <div>
      {/* cards */}
      <div className="  m-8 rounded-md ">
        <div className="bg-white w-60 relative">
          <div className=" w-44 h-44">
            <img className="h-full w-full object-contain" src={item.image}></img>
          </div>
          <div className="px-5 py-2  border-l-4 border-yellow-500">
            <p className="font-bold">{item.price}</p>
            <p className="text-sm">{item .title}</p>
            <p className="text-xs text-gray-400">
              {item.category
              }
            </p>
          </div>

          <div className="bg-amber-300 w-24  absolute top-2 left-2 flex justify-center items-center">
            <div>
              <BsLightningChargeFill />
            </div>

            <p>Featured</p>
          </div>
          <div className="bg-slate-50 rounded-full absolute top-2 right-2 w-7 h-6 flex items-center justify-center">
            <AiOutlineHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
