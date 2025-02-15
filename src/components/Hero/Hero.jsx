import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <>
    <div className="hero">
        <img src={profile_img} alt="" />
        <h1> <span>I'm Md Sohanur Rahman,</span> MERN stack web developer based in Bangladesh</h1>
        <p>I am a frontend developer from Dhaka, Bangladesh with 3 years experiences in multiple companies like Brain Station 23 and Apple.</p>
        <div className="hero-action">
            <div className="hero-connect">Contact with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
    </>
  )
}

export default Hero