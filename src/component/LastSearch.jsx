import React, { useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const LastSearch = () => {
  const [items, setitems] = useState([]);

  async function Carddetails() {
    await axios
      .get("https://fakestoreapi.com/products?limit=4")
      // .then(res=>res.json())
      .then((res) => setitems(res.data));
  }
  Carddetails();

  return (
    <div>
      
      <div className="pb-4 text-xl pt-5 px-7">Based on Your Last Search</div>
      <div className="flex bg-gray-100 h-80">
        {items &&
          items.map((item) => {
            console.log(item);
            return  <Cards item={item} />
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
