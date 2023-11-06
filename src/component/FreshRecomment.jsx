import axios from "axios";
import React, { useEffect, useState } from "react";
import Recoment from "./Recoment";

const FreshRecomment = () => {

    let [count,setcount]=useState(8)

  const [dataItem, setdataItem] = useState();
  function increase(){
    setcount(count=>count+8)
}

  useEffect(()=>{
    async function details() {
        await axios
          .get(`https://fakestoreapi.com/products?limit=${count}`)
          .then((res) => setdataItem(res.data));
      }
      details();
  },[count])

  return (
    <div>
      <div className="text-xl pt-10 px-7">Fresh Recommendations</div>

      <div className="flex flex-wrap">
        {dataItem &&
          dataItem.map((item,index) => {
            // console.log(item);
            return <Recoment item={item} key={index} />
          })}
      </div>
      <div className="  flex items-center justify-center">
        <button className="bg-white border-4 border-slate-800 font-semibold h-10 px-5 py-1 "onClick={increase}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default FreshRecomment;
