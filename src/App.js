import './App.css';
import "./components/h1.css" ;
import p1 from './images/p11.jpg';
import Header from './components/Header';
import About from './pages/About' ;
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies' ;
import Home from './pages/Home';
import Base from './components/Base';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <Projects/>
        <Skills/>
        <Hobbies/>
        <About p1 = {p1}/>
        <Base/>
    </div>
  );
}
export default App;
