import React from 'react'
import Heading from "../../common/heading/Heading"
import { distanison } from '../../../data/Data'
import "./distanison.css"
const Distanison = () => {
  return (
    <>
        <div className='  distanison-container'>
            <div className='container'>
                <Heading title='TOP DESTINATION' subtitle='Explore top destination'/>
                <div className='distanison-card'>
                    {
                        distanison.map((item)=>(
                            <div className='card'>
                                <img className='img' src={item.cover} alt=''/>
                                <div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.blance}</p>
                                </div>
                                <p>{item.text}</p>
                                <div className='ratting'>
                                    <p>{item.rating}</p>
                                    <img src={item.cover1} alt=''/>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Distanison