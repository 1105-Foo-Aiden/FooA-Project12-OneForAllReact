import React from "react";
import { Link } from "react-router-dom";

export default async function ApiCall(name){
  const promise = await fetch(`https://fooaproject8allforone.azurewebsites.net/Hello/${name}`)
  const data = await promise.text()
  result.textContent = data
}

export default function PageOneComponent() {
  return (
    <body className="bg-gradient-to-b from-[#222BFE] to-black h-screen ">
      <button className="bg-black p-3 rounded-lg mt-5 ml-5 lg:text-5xl text-white sm:text-2xl">
        <Link className="text-white decoration-blank" to={'/'}> Back</Link>
      </button>
      <h1 className="text-6xl font-bold flex justify-center text-white">
        Say Hello
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <input
          className="flex justify-center w-70"
          type="text"
          placeholder="Please enter your name"
          id="UserInput"
        />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <button id="submitBtn" className="bg-black text-white px-5 rounded-lg" onClick={ApiCall(UserInput.value)}>
          Submit
        </button>
        <br />
        <br />
        <p
          className="flex justify-center text-white xl:text-5xl sm:text-4xl"
          id="result"
        ></p>
      </div>
    </body>
  );
}
