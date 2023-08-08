
import './App.css';

import "./components/h1.css" ;
import p1 from './p1.jpg';

import Header from './components/header';
import Home from './pages/home' ;
import Projects from './pages/Projects';
import Skills from './pages/skills';
import Footer from './components/footer';
import Hobbies from './pages/hobbies' ;

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
