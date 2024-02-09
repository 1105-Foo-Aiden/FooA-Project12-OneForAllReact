import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LevelFour } from '../Services/dataServices';


export default function PageFourComonent() {
  
    const [num1, setNumONe] = useState(0)
    const [num2, setNumTwo] = useState(0)
    const [result, setResult] = useState('')
  
    async function getResult(){
        const answer = await LevelFour(num1,num2)
        return setResult(answer)
    }
    return (
   
    <body className="bg-gradient-to-b from-[#222BFE] to-black h-screen ">
        <button className="bg-black p-2 rounded-lg mt-3 ml-5 lg:text-5xl text-white sm:text-2xl"><Link style={{textDecoration: 'none'}} className='text-white' to={'/'}> &lt; Back</Link></button>
        <h1 className="lg:text-6xl font-bold flex justify-center text-white sm:text-3xl">Greather than Less than</h1>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="grid grid-cols-3 gap-10">
        <p className="text-white xl:text-4xl">Enter 1 number</p><br/>
        <p className="text-white xl:text-4xl sm:text-2xl">Enter another Number</p>
    </div>
    <div className="grid grid-cols-3 gap-10 ">
        <input className="flex justify-center w-70" type="number" placeholder="Enter one number" id="UserInput1" onChange={(e) =>setNumONe(e.target.value)}/>  
        <button id="submitBtn" className="bg-black text-white px-5 rounded-lg" onClick={() => getResult()}>Submit</button>
        <input type="number" className="flex justify-center w-70" placeholder="Enter Another Number" id="UserInput2" onChange={(e) => setNumTwo(e.target.value)}/>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <p className="flex justify-center text-white xl:text-5xl sm:text-4xl" id="result">{result}</p>



   
  </body>

  )
}
