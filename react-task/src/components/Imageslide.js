import React,{useState} from 'react'
import { slideimage } from './Slideimage'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa';

const Imageslide=({slides})=> {
const [current,setCurrent]=useState(0)
const length=slides.length;
//console.log(length);

const nextslide=()=>{
    setCurrent(current===length-1 ? 0: current+1);
}
console.log(current);


const prevslide=()=>{
    setCurrent(current===0 ? length-1:current-1);
}


if(!Array.isArray(slides)||slides.lenght<=0){
    return null;
}


    return (
        <section className="slide">
        <FaArrowAltCircleLeft className="left" onClick={prevslide}/>
        <FaArrowAltCircleRight className="right" onClick={nextslide}/>
            {slideimage.map((slide,index)=>{
                
                return (
                    <div 
                    className={index===current ? 'slide active' : 'slide'} 
                    key={index} >
                        {index===current  && (
                        <img src={slide.image} alt='My pictures' className='image' />
                        )}
                        
                    

                    </div>
                )
            })}
        </section>
    )
}

export default Imageslide;


