import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LevelFive } from '../Services/dataServices';

export default function PageFiveComponent() {
  const [name, setName] = useState(' ')
  const [place, setPlace] = useState(' ')
  const [adverb, setAdverb] = useState(' ')
  const [nameTwo, setNameTwo] = useState(' ')
  const [number, setNumber] = useState(0)
  const [noun, setNoun] = useState(' ')
  const [adjvective, setAdjective] = useState(' ')
  const [verbTwo, setVerbTwo] = useState(' ')
  const [verb, setVerb] = useState(' ')
  const [result, setResult] = useState('') 
  
  async function getResult(){
    const answer = await LevelFive(name, place, adverb, nameTwo, number, noun, adjvective,verb, verbTwo)
    setResult(answer)
  }
  
    return (
    <body className="bg-gradient-to-b from-[#222BFE] to-black h-screen text-white">
    <button className="bg-black p-2 rounded-lg mt-3 ml-5 lg:text-5xl text-white sm:text-2xl"><Link style={{textDecoration: 'none'}} className='text-white' to={'/'}> &lt; Back</Link></button>
    <h1 className="text-6xl font-bold flex justify-center">Mad Lib</h1>
    <br/><br/><br/><br/>


    <div className="grid xl:grid-cols-3 gap-5 justify-center text-black sm:grid-cols-1 px-8">
        <input onChange={(e) => setName(e.target.value)} className="flex justify-center py-3" id="userInput1" type="text" placeholder="Enter a Name"/>
        <br/>
        <input onChange={(e) => setPlace(e.target.value)} className="flex justify-center py-3" id="userInput2" type="text" placeholder="Enter a place"/>
        <input onChange={(e) => setAdverb(e.target.value)} className="flex justify-center py-3" id="userInput3" type="text" placeholder="Enter an adverb"/>
        <button id="submitBtn" className="bg-black text-white px-5 rounded-lg" onClick={()=>getResult()}>Submit</button>
        <input onChange={(e) => setNameTwo(e.target.value)} className="flex justify-center py-3" id="userInput4" type="text" placeholder="Enter another name"/>
        <input onChange={(e) => setNumber(e.target.value)} className="flex justify-center py-3" id="userInput5" type="long number" placeholder="Enter a Number"/>
        <br/>
        <input onChange={(e) => setNoun(e.target.value)} className="flex justify-center py-3" id="userInput6" type="text" placeholder="Enter an noun"/>
        <input onChange={(e) => setAdjective(e.target.value)} className="flex justify-center py-3" id="userInput7" type="text" placeholder="Enter a adjvective"/>
        <br/>
        <input onChange={(e) => setVerb(e.target.value)} className="flex justify-center py-3" id="userInput8" type="text" placeholder="Enter a verb"/>
        <input onChange={(e) => setVerbTwo(e.target.value)} className="flex justify-center py-3" id="userInput9" type="text" placeholder="Enter a another verb"/>
        <br/>
        <p className="flex justify-center text-white xl:text-5xl sm:text-4xl" id="result">{result}</p>
    
    </div>
  </body>
  )
}
