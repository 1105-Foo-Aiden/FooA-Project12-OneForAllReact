
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import HomePageComponent from './components/HomePageComponent';
import PageOneComponent from './components/PageOneComponent';
import PageTwoComponent from './components/PageTwoComponent';
import PageThreeComponent from './components/PageThreeComponent';
import PageFourComonent from './components/PageFourComonent';
import PageFiveComponent from './components/PageFiveComponent';
import PageSixComponent from './components/PageSixComponent';
import PageSevenComponent from './components/PageSevenComponent';
import PageEightComponent from './components/PageEightComponent';
import PageNineComponent from './components/PageNineComponent';
import PageTenComponent from './components/PageTenComponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<HomePageComponent/>}/>
      <Route path='PageOneComponent' element={<PageOneComponent/>}/>
      <Route path='PageTwoComponent' element={<PageTwoComponent/>}/>
      <Route path='PageThreeComponent' element={<PageThreeComponent/>}/>
      <Route path='PageFourComponent' element={<PageFourComonent/>}/>
      <Route path='PageFiveComponent' element={<PageFiveComponent/>}/>
      <Route path='PageSixComponent' element={<PageSixComponent/>}/>
      <Route path='PageSevenComponent' element={<PageSevenComponent/>}/>
      <Route path='PageEightComponent' element={<PageEightComponent/>}/>
      <Route path='PageNineComponent' element={<PageNineComponent/>}/>
      <Route path='PageTenComponent' element={<PageTenComponent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
