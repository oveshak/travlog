import React from 'react'
import Header from '../common/header/Header'
import Services from '../home/services/Services'
import Hero from '../home/hero/Hero'
import Distanison from '../home/distanison/Distanison'
import { Newslatter } from '../home/newslatter/Newslatter'
import Travel from '../home/travel/Travel'
import { KEYS } from '../home/key/KEYS'
import Footer from '../common/footer/Footer'
import Reviews from '../home/review/Reviews'



const Page = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Services/>
<Distanison/>
    <Travel/>
    <KEYS/>
    <Reviews/>
    <Newslatter/>
    <Footer/>
    </>
  )
}

export default Page