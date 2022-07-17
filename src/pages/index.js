import React,{useState} from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo , homeObjFour } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const index = () => {

    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>
    {
        setIsOpen(!isOpen)
    }


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection{...homeObjOne}/>
        <InfoSection{...homeObjTwo}/>
        <Services/>
        <InfoSection{...homeObjThree}/>
        <InfoSection{...homeObjFour}/>
        <Footer/>
        
        
    </>
  )
}

export default index