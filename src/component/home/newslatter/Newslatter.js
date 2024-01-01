import React from 'react'
import "./newslatter.css"
import Heading from '../../common/heading/Heading'
export const Newslatter = () => {
  return (
    <>
    <div className='container newslatter /contact'>
        <div>
            <div>
                <Heading title='SUBSCRIBE TO OUR NEWSLETTER' subtitle='Prepare yourself & let’s explore the beauty of the world'/>
            </div>
            <div className='inputfrom'>
                <div >
                    <input type="text" placeholder="Your Email" className="input"/>
                </div>
                <button className="btn1">Subscribe</button>
            
            </div>
        </div>
    </div>
    
    </>
  )
}
