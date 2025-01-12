
import './App.css';
import Aboutme from './Components/Aboutme/Aboutme';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';
import Welcome from './Components/Welcome/Welcome';
import Works from './Components/Works/Works';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";







function App() {
  const setDarkMode = () =>{
   document.querySelector("body").setAttribute('data-theme','dark')
  }

  const setLightMode = () =>{
    document.querySelector("body").setAttribute('data-theme','light')
   }

   const toggleTheme = (e) => {
    if(e.target.checked) setDarkMode();
    else setLightMode()
   }
  return (

    
    <div className="App">
       <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
      <Header/>
      <Welcome/>
      <Aboutme/>
      <Works/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
