import Image from "next/image";
import React from "react";

const ExploreBtn = ({ btnName }) => {
  return (
    <div className=" group ">
                <button
                  type="submit"
           
                  className={`border-black border px-4 gap-2 flex items-center h-[36px] w-fit transition-all  ease-in-out group-hover:bg-primary group-hover:border-primary group-hover:text-white cursor-pointer `}
             
                >
                  <span className="text-base bg-transparent  max-md:px-4 flex py-1 text-black group-hover:text-white">
                  { btnName } </span>
                   <div className="bg-[url('/images/home/btnArrow.svg')] group-hover:bg-[url('/images/home/lightArrow.svg')] bg-contain w-[14px] h-[14px] bg-no-repeat ">

                   </div>
                   
                 
                </button>
              </div>
  );
};

export default ExploreBtn;
