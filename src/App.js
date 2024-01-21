import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import History from './components/History'
import Contact from './components/Contact';
function App() {

  return (
    <div className="App">

     <Navbar/> 
        <Home/> 
      <Intro/>
      <History/>
     <Contact/> 
   
    </div>
  );
}

export default App;
