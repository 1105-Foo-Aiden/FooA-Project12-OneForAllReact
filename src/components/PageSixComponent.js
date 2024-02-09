import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LevelSix } from '../Services/dataServices'

export default function PageSixComponent() {
    
    const[num1, setNumOne] = useState(0)
    const [result, setResult] = useState('')

    async function getResult(){
        const answer = await LevelSix(num1)
        setResult(answer)
    }

    return (
    <body className="bg-gradient-to-b from-[#222BFE] to-black h-screen ">
    <button className="bg-black p-2 rounded-lg mt-3 ml-5 lg:text-5xl text-white sm:text-2xl"><Link style={{textDecoration: 'none'}} className='text-white' to={'/'}> &lt; Back</Link></button>
    <h1 className="text-6xl font-bold flex justify-center text-white">Odd Or Even</h1> 
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <div className="flex justify-center">
        <input className="flex justify-center w-70" type="number" placeholder="Enter a number" id="UserInput1" onChange={(e)=>setNumOne(e.target.value)}/>  
        <br/><br/>
    </div>
    <br/><br/><br/><br/><br/>
    <div className="flex justify-center">
        <button id="submitBtn" className="bg-black text-white px-5 rounded-lg" onClick={()=>getResult()}>Submit</button>
        <br/><br/>
        
    </div>
    <br/><br/><br/><br/>
    <p className="flex justify-center text-white xl:text-5xl sm:text-4xl" id="result">{result}</p>
  </body>
  )
}
