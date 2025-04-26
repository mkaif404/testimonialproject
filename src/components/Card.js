import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;

  return (
    <div className="flex flex-col md:relative ">
      <div className="relative mx-auto md:absolute md:top-[-7rem] z-[10]">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-25 sticky"
          src={review.image}
          alt=""
        />
      </div>
      <div className="rounded-full w-[140px] h-[140px] sm:hidden hidden md:block lg:block bg-violet-500 absolute top-[-120px] left-[10px] z-[5]"></div>
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize tracking-wider ">{review.name}</p>
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>

      <div className="mx-auto mt-5 text-violet-500">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      <div className="mx-auto mt-5 text-violet-500">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
