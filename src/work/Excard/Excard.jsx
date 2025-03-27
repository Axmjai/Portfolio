import React from 'react'
import './Excard.css'

const Excaed = ({details}) => {
  return (
    <div className='work-ex-card'>
        <h6>{details.title}</h6>

        <div className='work-duration'>{details.date}</div>

        <ul>
            {details.pesponsibilities.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Excaed
