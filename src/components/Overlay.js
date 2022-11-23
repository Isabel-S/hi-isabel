import React, { forwardRef } from 'react';

function openResume(e) {
    e.preventDefault();
    console.log()
    window.open("https://drive.google.com/file/d/1ILEF4zptPkJ19CCC88qtzz2Zid9hT7YR/view?usp=sharing");
  }

function openGithub(e) {
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
            <div className="slide">
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
                <h2>Coding Stuff</h2>
                <div>
                    <h3>What I'm doing now:</h3>
                    <div className='list'>
                        <li>Fullstack development for <a href="https://stanford-craft.netlify.app/login">educational digital widgets</a> for a course teaching the statstics and social impacts of AI</li>
                        <li>Redesigning the <a href="https://stanforddaily.com/masthead/">old Daily Masthead</a> into <a href = "https://www.figma.com/file/yuNwxfvHZaKgmqvS4WiJSR/Untitled?node-id=1%3A4">this</a></li>
                        <li>Web scraping news articles and Youtube views and comments to create a timeline on the Depp/Heard trial and relation to the #MeToo movement</li>
                    </div>
                    

                    <h3>Past work I'm proud of:</h3>
                    <div className='list'>
                        <li>Made a webapp for educational research, and am a coauthor of the research paper - my first paper!</li>
                        <li>I made this website, including this rotating adrogynous entity!</li>
                        <li>Coded stuff for Metacrafters, <a>here's what the Head of Engineering said about my work.</a></li>
                    </div>

                    <button onClick={openGithub} className="resume-button">Github</button>
                </div>
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