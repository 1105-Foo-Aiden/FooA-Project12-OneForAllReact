
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import HomePageComponent from './components/HomePageComponent';
import PageOneComponent from './components/PageOneComponent';
import PageTwoComponent from './components/PageTwoComponent';
import { useState } from 'react';
import ApiCall from './components/PageOneComponent'

const [result, setResult] = useState('')

async function setResult(){
  await ApiCall()
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<HomePageComponent/>}/>
      <Route path='PageOneComponent' element={<PageOneComponent/>}/>
      <Route path='PageTwoComponent' element={<PageTwoComponent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
