import React from 'react';
import Navber from './components/Navber.jsx'
import Home from './Home/Home.jsx';
import Skill from './Skills/skill.jsx';
import Work from './work/work.jsx';
import ContactMe from './ContactMe/ContactMe.jsx';
import './index.css'
import './App.css'
import Bu from './resume_port/bu.jsx';

function App() {
  return (

   <>
    <Navber />
    <div className='container'>
      <Home/>
      <Bu />
      <Skill />
      <Work />
      <ContactMe />
    </div>
   </>


  );
}

export default App;