import React, { forwardRef } from 'react';

function openResume(e) {
    e.preventDefault();
    console.log()
    window.open("https://drive.google.com/file/d/1ILEF4zptPkJ19CCC88qtzz2Zid9hT7YR/view?usp=sharing");
  }

const Overlay = forwardRef(({ caption, scroll }, ref) => (
    <div className="scroll"
        ref={ref}
        onScroll={(e) => {
            if (window.innerWidth > 800) {
                scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
            } else {
                scroll.current = -e.target.scrollLeft / (e.target.scrollWidth - window.innerWidth)   
            }
            let progress = scroll.current.toFixed(2)
            let grad = ((progress * 360) / 1).toFixed(0)
            caption.current.innerText = `${Math.abs(grad)}°`
        }}>
        <div className = "slides"> 
            <div className="slide slide1">
                <div className="intro">
                <div className = "profile"><img className = "profile-image" src={require('../images/profile2.jpg')} alt="Paris"/></div>
                <div className= "intro-text">
                    <p>I like “storytelling”--through teaching, public speaking, etc.--understanding how to best tell these stories (like through coding)! I’m curious how we can be informed. How can we inform citizens so they are empowered to make the best decisions in their world? </p>
                    <p>I love tech, education, advocacy and recently, digital storytelling! Lately, I’ve been coding web experiences so students can learn better, or a news reader can get informed better – this includes interactive news articles and digital learning tools. </p>
                    <p>My days are filled with learning, coding, teaching, and doing research.</p>
                    <button onClick={openResume} className="resume-button">Resume</button>
                </div>
                </div>  
            </div>
            <div className="slide">
                90°
            </div>
            <div className="slide">
                180°
            </div>
            <div className="slide">
                270°
            </div>
            <span className="caption" ref={caption}>
                0°
            </span>
            <a className="model-link" href="https://skfb.ly/6Z9MU" target="_blank">
                Model by sleepyjoshua
            </a>
        </div>
        <div className = "womp">

        </div>
    </div>
))

export default Overlay;