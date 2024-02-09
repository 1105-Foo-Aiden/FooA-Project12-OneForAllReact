import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LevelThree } from "../Services/dataServices";

export default function PageThreeComponent() {
  const [result, setResult] = useState('')
  const [name, setName] = useState('')
  const [time, setTime] = useState(0)
  
  async function getResult(){
    const response = await LevelThree(name, time)
    setResult(response)
  }
  
    return (
    <body className="bg-gradient-to-b from-[#222BFE] to-black h-screen ">
      <button className="bg-black p-2 rounded-lg mt-3 ml-5 lg:text-5xl text-white sm:text-2xl">
        <Link
          style={{ textDecoration: "none" }}
          className="text-white"
          to={"/"}>
          &lt; Back
        </Link>
      </button>
      <h1 className="text-6xl font-bold flex justify-center text-white">
        Two Questions
      </h1>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="grid grid-cols-3 gap-10">
        <p className="text-white">What is your name</p>
        <br />
        <p className="text-white">When did you wake up?</p>
      </div>
      <div className="grid grid-cols-3 gap-10 px-2">
        <input
          className="flex justify-center w-70"
          type="text"
          placeholder="Please enter your name"
          id="UserInput1"
          onChange={(e)=>setName(e.target.value)}
        />
        <button id="submitBtn" className="bg-black text-white px-5 flex justify-center rounded-lg h-max w-50" onClick={() => getResult()}>
          Submit
        
        </button>
        <input
          type="number"
          className="flex justify-center w-70"
          placeholder="Enter when you woke up"
          id="UserInput2"
          onChange={(e)=>setTime(e.target.value)}
        />
      </div>
      <br/>
      
      <br /><br /><br /><br /><br /><br /><br />
      <p
        className="flex justify-center text-white xl:text-5xl sm:text-4xl"
        id="result">{result}</p>
    </body>
  );
}
