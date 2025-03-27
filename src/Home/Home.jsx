import React from 'react'
import './Home.css'
import img from "../img/me.jfif"
const Home = () => {
  return (
    <section className='home-container'>
        <div className='home-content' id='1'>
            <h2>Welcome To Portfolio Website of&nbsp; Suphakorn</h2>
            <p>
            My name is Suphakorn Rodchona. My nickname is Aom. I am 22 years old.

            </p>
            
          
        </div>

        <div className='home-img'>
            <div className='tect-img'>
                <img src={img} alt=''/>
            </div>      
        </div>
    </section>
     
  )
}

export default Home
