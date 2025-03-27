import React ,{useRef}from 'react'
import emailjs from '@emailjs/browser';
import './ContactFrom.css'

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0j2djbk', 'template_kcqdewq', form.current, {
        publicKey: 'lVgwtyh6SevVs3X57',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text);

        },
      );
  };

  return (
    <div className='contact-form-content'>
        <form ref={form} onSubmit={sendEmail}>
            <div className='name-container'>
                <input type='text' name='user_name' placeholder='Your Name' required/>
               
            </div>
            <input type='text' name='email' placeholder='Email' required/>
            <textarea type='text' name='message' placeholder='Message' rows={3} required/>
            <button>SEND</button>
        </form>
      
    </div>
  )
}

export default ContactForm
