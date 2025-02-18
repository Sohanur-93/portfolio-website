import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c9dffa72-3b2d-46a8-9421-274747718956");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <div className="contact" id='contact'>
                <div className="contact-title">
                    <h1>Get in touch</h1>
                    <img src={theme_pattern} alt="" />
                </div>

                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        <p>I'm currently avaliable to take on new projects, so fell free send me a message about anything that about you want to me to work on. You can contact anytime</p>
                        <div className="contact-details">
                            <div className="contact-detail"><img src={mail_icon} alt=" " /> <p>nur49@gmail.com</p></div>
                            <div className="contact-detail"><img src={call_icon} alt=" " /><p>+445-326-871</p></div>
                            <div className="contact-detail"><img src={location_icon} alt=" " /><p>Dhaka, Bangladesh</p></div>
                        </div>
                    </div>

                    <form className="contact-right" onSubmit={onSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" placeholder='Enter your name' name='name' />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" placeholder='Enter your email' name='email' />
                        <label htmlFor="message">Write your message here</label>
                        <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                        <button type='submit' className='contact-submit'>Submit Now</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Contact