import React from 'react'
import "./hero.css"
import { advertagment } from '../../../data/Data'
const Hero = () => {
  return (
    <>
    <div className='container hero-container /'>
        <div className='box'>
            <div className='left'>
            <div class="text">
               <div className='herobtn'>
               <button className="btn1">Explore the world! <img src="images/work-img.png" alt="" /></button>
               </div>
                <h1>
                    Travel <span> top destination </span>
                    of the world</h1>
                <p>We always make our customer happy by
                    providing
                    as many choices as possible </p>
                <div className='btn2 btn'>
                    <button className='btn23'>Get Started</button>
                    <button className='btn24' > <img src="images/play-circle.5 1.png" alt="" /> Get Started</button>
                </div>

            </div>
            </div>
            <div className='right'>
                <img src="./images/hero-img.png" alt=''/>
            </div>
        </div>
        <div className='add'>
        <div className='advartagment'>
            {
                advertagment.map((item)=>(
                    <div className='box'>
                        <img src={item.cover} alt=''/>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero