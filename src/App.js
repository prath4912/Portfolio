import './App.css';
import p1 from './p1.jpg';

import Header from './components/header';
import Home from './pages/home' ;
import Projects from './pages/Projects';
import Skills from './pages/skills';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home p1 = {p1}/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;
