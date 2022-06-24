import React from "react";
import image from "../../../assets/image (8).jpg";
import logo from "../../../assets/cloud.PNG";

function Card1() {
  return (
    <div className="my-20 mx-10 md:mx-2 px-10 md:px-5 bg-white relative md:w-1/4">
      <div className="absolute top-0 left-0 w-full bg-yellow-400 h-40"></div>
      <div className="flex justify-center w-1/2 md:w-full md:h-60">
        <img
          src={image}
          className="transition ease-in-out delay-150 z-30 w-full h-auto"
          alt="Cloud Service"
        />
      </div>
      <h1 className="text-xl font-bold md:h-20 mt-8">HPE GREENLAKE CLOUD SERVICES</h1>
      <p className="text-md card-height">
        Get the cloud experience on-prem, and always have capacity when you need
        it.
      </p>
      <a href="https://www.hpe.com/us/en/greenlake.html" className="arrow-animation flex justify-center items-center w-full font-bold mt-5 py-3 outline-none outline-offset-0 border-2 border-green-800 hover:outline-2 hover:outline-green-800 rounded-md">
        Learn more&nbsp;&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
      <div className="h-20 block">
        <a href="https://support.hpe.com/hpesc/public/home" className="arrow-animation flex text-md py-2 justify-start items-center text-green-700 font-bold">
          Support&nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
      <a
        href="https://www.hpe.com/us/en/greenlake/services.html"
        className="flex justify-start items-center my-5 py-4 border-t-2 border-gray-300 cursor-pointer"
      >
        <img src={logo} alt="services" className="w-8 h-8" />
        <p className="text-md font-bold text-green-700 px-4">
          View all could Services
        </p>
      </a>
    </div>
  );
}

export default Card1;
