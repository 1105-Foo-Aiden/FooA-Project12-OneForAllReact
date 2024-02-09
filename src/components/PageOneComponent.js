import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LevelOne } from "../Services/dataServices.js";

export let result = document.getElementById('result');

export default function PageOneComponent() {
  const [name, setName] = useState('')
  const [result, setResult] = useState('')
  
  const getResult = async () =>{
    const response = await LevelOne(name)
    setResult(response)
  }
  return (
    <body className="bg-gradient-to-b from-[#222BFE] to-black h-screen ">
      <button className="bg-black p-2 rounded-lg mt-3 ml-5 lg:text-5xl text-white sm:text-2xl">
        <Link style={{textDecoration: 'none'}} className="text-white" to={'/'}> &lt; Back</Link>
      </button>
      <h1 className="text-6xl font-bold flex justify-center text-white">
        Say Hello </h1> 
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div className="flex justify-center">
        <input
          className="flex justify-center w-70"
          type="text"
          placeholder="Please enter your name"
          onChange={(e)=> setName(e.target.value)}
        />
        <br /><br />
      </div> 
      <br /> <br /> <br /> <br /> <br />
      <div className="flex justify-center">
        <button id="submitBtn" className="bg-black text-white px-5 rounded-lg" onClick={() => getResult()}>
          Submit
        </button>
        <br /><br />
        <p className="flex justify-center text-white xl:text-5xl sm:text-4xl">{result}</p>
      </div>
    </body>
  );
}
