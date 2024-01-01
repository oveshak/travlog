import React from 'react'
import "./keys.css"
import Heading from '../../common/heading/Heading'
import { key } from '../../../data/Data'
export const KEYS = () => {
  return (
    <>
      <div className='container'>
        <div className='keys-container'>
            <div className='box'>
                <div className='left'>
                    <div>
                        <Heading title="KEY FEATURES" subtitle="We offer best services"/>
                    </div>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                    </p>
                    <div className='box2'>
                        <div className='ci'>
                            {
                                key.map((item)=>(
                                    <div>
                                        <div>
                                            <img src={item.cover} alt=''/>
                                        </div>
                                        <div className='ti'>
                                            <h3>{item.title}</h3>
                                            <p>{item.subtitle}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <img src='./images/key_features.png' alt=''/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
