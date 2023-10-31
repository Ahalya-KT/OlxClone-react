import React, { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import Cards from "./Cards";

const LastSearch = () => {
  const [items, setitems] = useState([]);

  async function Carddetails() {
    await axios
      .get("https://fakestoreapi.com/products")
      // .then(res=>res.json())
      .then((res) => setitems(res.data));
  }
  Carddetails();

  return (
    <div>
      <div className="pb-4 text-xl">Based on Your Last Search</div>
      <div className="flex flex-wrap">
        {items &&
          items.map((li) => {
            console.log(li);
            return;

            <Cards />;
            //  <div className='w-52 '>
            //   <img  src={li.image}></img>
            //   <p>{li.id}</p>
            //   <p>{li.title}</p>
            //   <p>{li.price}</p>
            // </div>
          })}
      </div>
    </div>
  );
};

export default LastSearch;
