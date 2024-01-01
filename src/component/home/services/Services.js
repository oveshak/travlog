import React from 'react'
import Heading from '../../common/heading/Heading'
import { services } from '../../../data/Data'
import "./services.css"
const Services = () => {
  return (
    <>
     <div className='container services-container /services'>

       
        <div className='box'>
            <div className='left'>
            <Heading title="services" subtitle="Our top value categories for you"/>
            </div>
            <div className='right'>
                {
                    services.map((item)=>(
                        <div className='box1'>
                            <img src={item.cover} alt=''/>
                            <h4>{item.title}</h4>
                            <p>{item.subtitle}</p>
                        </div>
                    ))
                }
          
        </div>
        </div>
    
     </div>   

    </>
  )
}

export default Services