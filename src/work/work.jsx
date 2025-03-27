import React, { useRef } from 'react'
import './work.css'
import { WORK_EXPERIENCE } from '../utils/data'
import Excaed from './Excard/Excard'
import Slider from 'react-slick'

const Work = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows: true,
        responsive:[
            {
                breakpoint: 769,
                settings: {
                slidesToShow:1,
                slidesToScroll:1,
                },
            },
        ],
    };



  return (
    <section className='ex-container' id='3'>
      <h5> Work Experience and Internship</h5>

        <Slider ref={sliderRef} {...settings}>
        {WORK_EXPERIENCE.map((item) =>(
            <Excaed key={item.title} details={item} />
        ))}
        </Slider>
    
    </section>
  )
}

export default Work
