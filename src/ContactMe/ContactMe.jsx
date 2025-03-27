import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactFrom/ContactFrom'
import img from "../img/email.png"
import img2 from "../img/home.png"
const ContactMe = () => {
  return(
    <section className='contact-container' id='4'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                iconUrl={img}
                text="rodchawnas@gmail.com"
                />
                <ContactInfoCard
                iconUrl={img2}
                text="1/6, Moo 1, Bangrachan District, Singburi Province, Posangkhok Subdistrict, 16150"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>

    </section>
  )
}

export default ContactMe
