
// github deployment

 // "homepage": "https://Prathmesh-Pawar.github.io/Portfolio",
  // "name": "portfolio",
  
import './App.css';
import Piee from './components/Piee';

import "./components/h1.css" ;
import p1 from './images/p11.jpg';



import Header from './components/Header';
import Home from './pages/home' ;
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/footer';
import Hobbies from './pages/hobbies' ;
import Bg from './components/Bg';

function App() {
  return (
    <div className="App">
        <Header/>
        <Bg/>
        <Projects/>
        <Skills/>
        <Hobbies/>
        <Home p1 = {p1}/>

        <Footer/>
    </div>
  );
}

export default App;
