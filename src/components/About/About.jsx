import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <>
    <div className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde quae rem sunt dignissimos quidem blanditiis exercitationem cum error odio.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque obcaecati explicabo, eaque corporis voluptates numquam sint saepe fugiat tempore asperiores?</p>
                    36 minutes
                </div>
            </div>

            
        </div>
    </div>
    </>
  )
}

export default About;