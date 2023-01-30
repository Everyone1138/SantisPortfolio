import React from 'react';
import Selfie from '../../assets/images/theaterArt.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <img src={Selfie} alt="Theater Art"></img>
        <p>
         Hi!
        </p>
        <p>
          Thanks for coming to my portfolio page. I am a fullstack web developer. Feel free to checkout the portfolio tab to see some of my work. You can leave me your information in the contact tab. And you can check out my resume on the resume tab. 
        </p>
      </div>
    </section>
  );
}

export default About;
