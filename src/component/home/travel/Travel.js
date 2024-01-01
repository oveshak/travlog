import React from 'react'
import "./travel.css"
import Heading from '../../common/heading/Heading'
import { travel } from '../../../data/Data'

const Travel = () => {
  return (
    <>
     <div className=' container'>
        <div className='travel-container'>
        <div className='box'>
            
            <div className='left '>
                <img src='./images/discount img.png' alt=''/>
                
            </div>
            
            <div className='right '>
                <div>
                    <Heading title='TRAVEL POINT' subtitle='We helping you find your dream location'/>
                </div>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>

                <div className='box2'>
                    <div>
                        {travel.map((item)=>(
                            <div>
                                <h2>{item.amount}</h2>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default Travel