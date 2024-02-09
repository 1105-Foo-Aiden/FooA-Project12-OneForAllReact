import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LevelEight } from '../Services/dataServices'

export default function PageEightComponent() {
    const [question, setWord] = useState(0)
    const [result, setResult] = useState('')
  
      async function getResult(){
          const answer = await LevelEight(question)
          setResult(answer)
      }
  
    return (
    <body class="bg-gradient-to-b from-[#222BFE] to-black h-screen ">
    <button class="bg-black p-2 rounded-lg mt-3 ml-5 lg:text-5xl text-white sm:text-2xl"><Link style={{textDecoration: 'none'}} className='text-white' to={'/'}> &lt; Back</Link></button>
    <h1 class="text-6xl font-bold flex justify-center text-white">Magic 8 Ball</h1>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <div class="flex justify-center">
        <input class="flex justify-center w-fit" type="text" placeholder="Ask a question" id="UserInput1" onChange={(e) => setWord(e.target.value)}/>  
        <br/><br/>
    </div>
    <br/><br/><br/><br/><br/>
    <div class="flex justify-center">
        <button id="submitBtn" class="bg-black text-white px-5 rounded-lg" onClick={() => getResult()}>Submit</button>
        <br/><br/>
        
    </div>
    <br/><br/><br/><br/>
    <p class="flex justify-center text-white xl:text-5xl sm:text-4xl" id="result">{result}</p>
  </body>
  )
}
