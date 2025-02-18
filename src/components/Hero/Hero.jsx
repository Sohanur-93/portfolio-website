import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <>
    <div className="hero" id='home'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Md Sohanur Rahman,</span> MERN stack web developer based in Bangladesh</h1>
        <p>I am a frontend developer from Dhaka, Bangladesh with 3 years experiences in multiple companies like Brain Station 23 and Apple.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}></p>Conect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
    </>
  )
}

export default Hero