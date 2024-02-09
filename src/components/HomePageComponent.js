import React from "react";
import { Link } from "react-router-dom";


export default function HomePageComponent() {
  return (
    <body className="bg-gradient-to-b from-[#222BFE] to-black h-screen text-white"> 
    <br /> <br /> <br /> <br />
      <p className="xl:font-bold text-5xl flex justify-center sm:text-5lg">
        All For one, A collection of Mini
      </p>{" "}
      <br />{" "}
      <p className="xl:font-bold text-5xl flex justify-center sm:text-5lg ">
        Challenges
      </p> <br /> <br /> <br /> <br />
      <h1 className="xl:text-6xl font-bold flex justify-center sm:text-5lg">
        {" "}
        Select your challenge
      </h1>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div className="container mx-auto flex justify-center">
        <div className="grid xl:grid-cols-4 grid-rows-3 gap-5 pl-10 w-screen ">
          <button className="bg-black w-max rounded-md px-3 h-max py-2 text-2xl">
            <Link style={{textDecoration: 'none'}} className="text-white" to={"PageOneComponent"}>
              Say hello
            </Link>
          </button>
          <button className="bg-black w-max rounded-md px-3 h-max py-2 text-2xl">
            <Link style={{textDecoration: 'none'}} className="text-white" to={"PageTwoComponent"}>
              Add 2 Numbers
            </Link>
          </button>
          <button className="bg-black w-max rounded-md px-3 h-max py-2 text-2xl">
            <Link style={{textDecoration: 'none'}} className="text-white decoration-none" to={"PageThreeComponent"}>
              Two Questions
            </Link>
          </button>
          <button className="bg-black w-max rounded-md px-3 h-max py-2 text-2xl">
            <Link style={{textDecoration: 'none'}} className="text-white decoration-none" to={"PageFourComponent"}>
              Greater than Less than
            </Link>
          </button>
          <button className="bg-black w-max rounded-md px-3 h-max py-2 text-2xl">
            <Link style={{textDecoration: 'none'}} className="text-white decoration-none" to={"PageFiveComponent"}>
              Mad lib
            </Link>
          </button>
          <button className="bg-black w-max rounded-md px-3 h-max py-2 text-2xl">
            <Link style={{textDecoration: 'none'}} className="text-white" to={"PageSixComponent"}>
              Odd or Even
            </Link>
          </button>
          <button className="bg-black w-max rounded-md px-3 h-max py-2 text-2xl">
            <Link style={{textDecoration: 'none'}} className="text-white decoration-none" to={"PageSevenComponent"}>
              Reverse it Word
            </Link>
          </button>
          <button className="bg-black w-max rounded-md px-3 h-max py-2 text-2xl">
            <Link style={{textDecoration: 'none'}} className="text-white decoration-none" to={"PageEightComponent"}>
              Magic 8 Ball
            </Link>
          </button>
          <button></button>
          <button className="bg-black w-max rounded-md px-3 h-max py-2 text-2xl">
            <Link style={{textDecoration: 'none'}} className="text-white" to={"PageNineComponent"}>
              Reverse it Number
            </Link>
          </button>
          <button className="bg-black w-max rounded-md px-3 h-max py-2 text-2xl">
            <Link style={{textDecoration: 'none'}} className="text-white decoration-none" to={"PageTenComponent"}>
              Restaurant Picker
            </Link>
          </button>
        </div>
      </div>
    </body>
  );
}
