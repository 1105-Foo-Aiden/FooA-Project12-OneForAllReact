import React, { useState } from "react";
import { Link } from "react-router-dom";
import { levelTwo } from "../Services/dataServices";

export default function PageTwoComponent() {
  const [num1, SetnumOne] = useState(0)
  const [num2, SetNumTwo] = useState(0)
  const [result, SetResult] = useState('')

  const getResult = async () =>{
   const answer = await levelTwo(num1, num2)
    SetResult(answer)
  }

  return (
    <body className="bg-gradient-to-b from-[#222BFE] to-black h-screen ">
      <button className="bg-black p-2 rounded-lg mt-3 ml-5 lg:text-5xl text-white sm:text-2xl">
        <Link style={{textDecoration: 'none'}} className='text-white' to={'/'} > &lt; Back</Link>
      </button>
      <h1 className="text-6xl font-bold flex justify-center text-white">
        Add 2 Numbers
      </h1> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div className="grid grid-cols-3 pl-10 gap-10">
        <input
          className="flex justify-center w-70"
          type="number"
          placeholder="Please enter a number"
          id="UserInput1"
          onChange={(e) => SetnumOne(e.target.value)}/>
        <button id="submitBtn" className="bg-black text-white px-5 rounded-lg" onClick={()=>getResult()}>
          Submit
        </button>
        <input
          type="number"
          className="flex justify-center w-70"
          placeholder="Enter another number"
          id="UserInput2"
          onChange={(e) => SetNumTwo(e.target.value)}/>
      </div>
      <br /><br /><br /><br /><br />
      <div className="flex justify-center">
        <br /><br />
      </div>
      <br /> <br /> <br />
      <p className="flex justify-center text-white xl:text-5xl sm:text-4xl" id="result">{result}</p>
    </body>
  );
}
