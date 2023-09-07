import React, { forwardRef } from 'react';

function openResume(e) {
    e.preventDefault();
    console.log()
    window.open("https://worried-theory-aa1.notion.site/Isabel-Sieh-s-Resume-baeb31dcb5cf4d9aba6333496eb75392?pvs=4");
  }

function openGithub(e) {
    e.preventDefault();
    console.log()
    window.open("https://github.com/Isabel-S");
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
                    
                    <p>I’m interested in how we can use tech to improve humanity and our earth, including AI for social good, computational journalism, edtech, and any tech innovation that tackles real-world problems.</p>
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
                        <li>Starting AI and web tool research this school year on entity extraction this fall as a <a href="https://brown.columbia.edu/announcing-2023-magic-grants/">2023-2024 grant awardee of the Columbia-Stanford Brown Instititue for Media Innovation</a></li>
                        <li>Just finished independent NLP research on the online violence faced by Filipina journalists on Facebook; read about it and see my data viz on <a href="https://www.linkedin.com/feed/update/urn:li:activity:7102535933379452928/">here</a></li>
                    </div>
                    

                    <h3>Past work I'm proud of:</h3>
                    <div className='list'>
                        <li>Fullstack development for <a href="https://stanford-craft.netlify.app/"> clasroom-ready digital widgets</a> for teaching the statstics and social impacts of AI</li>
                        <li>Made a webapp for learning science research, and received a coauthorship (my first paper)!</li>
                        <li>I made this website, including this rotating adrogynous entity!</li>
                        <li>Coded stuff for Metacrafters, <a href="https://www.linkedin.com/posts/codesujal_what-even-is-your-job-is-a-question-activity-6979057387965931520-Y_V4?utm_source=share&utm_medium=member_desktop">here's what the Head of Engineering said about my work</a>.</li>
                    </div>

                    <button onClick={openGithub} className="resume-button">Github</button>
                </div>
            </div>
            <div className="slide">
            <h2>Teaching Stuff</h2>
                <div>
                    <h3>I teach coding and study how we can teach students about AI:</h3>
                    <div className='list'>
                        <p>Teaching has helped me think about what how to communicate ideas so people will learn and understand. This thinking translates strongly web development, which I focus on a lot now.</p>
                        <li>In my freshman year and summer 2023 I taught "section" for Stanford's intro CS course CS106A - its an unique <a href = "https://cs198.stanford.edu/cs198/">program</a>!</li>
                        <li> I work with <a href="https://distal.stanford.edu/">Stanford DISTAL lab</a> to make a course on AI and digital widgets to teach the class, <a href="https://stanford-craft.netlify.app/"> here's the stuff I coded in action</a>.</li>
                        <li>Before university, in the Philippines, I started a global online <a href= "coding.ph">coding school</a> and nationwide <a href="girlswillcode.com">girls coding organization</a>, both which run independently today.</li>
                    </div>
                </div>
            </div>
            <div className="slide last">
                <h2>Let's keep in touch!</h2>
                <div>
                    <h3>My email is up there ^</h3>
                    <div className='list'>
                        <li>I'm looking for a summer 2024 tech roles (software engineering, AI/data, full stack webdev)</li>
                        <li>More links: <a href= "https://www.linkedin.com/in/isabelsieh/">LinkedIn</a></li>
                    </div>
                </div>
                <div className='bye-space'></div>
                <h2>... Bye!!</h2>
            </div>
        </div>
        <div className = "womp">

        </div>
    </div>
))

export default Overlay;