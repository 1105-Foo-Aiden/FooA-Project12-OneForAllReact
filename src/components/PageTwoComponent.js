import React from "react";
import { Link } from "react-router-dom";

export default function PageTwoComponent() {
  return (
    <body className="bg-gradient-to-b from-[#222BFE] to-black h-screen ">
      <button className="bg-black p-3 rounded-lg mt-5 ml-5 lg:text-5xl text-white sm:text-2xl">
        <Link to={'/'}> &ltBack</Link>
      </button>
      <h1 className="text-6xl font-bold flex justify-center text-white">
        Add 2 Numbers
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="grid grid-cols-3 pl-10 gap-10">
        <input
          className="flex justify-center w-70"
          type="number"
          placeholder="Please enter a number"
          id="UserInput1"
        />
        <button id="submitBtn" className="bg-black text-white px-5 rounded-lg">
          Submit
        </button>
        <input
          type="number"
          className="flex justify-center w-70"
          placeholder="Enter another number"
          id="UserInput2"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <p
        className="flex justify-center text-white xl:text-5xl sm:text-4xl"
        id="result"
      ></p>

      <script src="../Scripts/levelTwo.js"></script>
    </body>
  );
}
