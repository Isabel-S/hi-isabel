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
                    <p>I like “storytelling” (through educating, public speaking, etc.) and understanding how to best tell these stories (like through coding)! I’m curious how we can be informed. How can we inform citizens so they are empowered to make the best decisions in their world? </p>
                    <p>I love tech, education, advocacy and recently, digital storytelling! Lately, I’ve been coding web experiences so students can learn better, or news readers can get informed better – this includes interactive news articles and digital learning tools. </p>
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
                        <li>Fullstack development for <a href="https://stanford-craft.netlify.app/"> clasroom-ready digital widgets</a> for teaching the statstics and social impacts of AI</li>
                        <li>Redesigning the <a href="https://stanforddaily.com/masthead/">old Daily Masthead</a> into <a href = "https://www.figma.com/file/yuNwxfvHZaKgmqvS4WiJSR/Untitled?node-id=1%3A4">this</a></li>
                        <li>Web scraping news articles and Youtube views and comments to create a timeline on the Depp/Heard trial and relation to the #MeToo movement</li>
                    </div>
                    

                    <h3>Past work I'm proud of:</h3>
                    <div className='list'>
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
                        <li> I work with <a href="https://distal.stanford.edu/">Stanford DISTAL lab</a> to make a course on AI and digital widgets to teach the class, <a href="https://stanford-craft.netlify.app/"> here's the stuff I coded in action</a>.</li>
                        <li>In my freshman year I taught "section" for Stanford's intro CS course CS106A - its an unique <a href = "https://cs198.stanford.edu/cs198/">program</a>!</li>
                        <li>Before university, in the Philippines, I started a nationwide <a href= "coding.ph">coding school</a> and <a href="girlswillcode.com">girls coding organization</a>, both which run independently today.</li>
                    </div>
                </div>
            </div>
            <div className="slide last">
                <h2>Let's keep in touch!</h2>
                <div>
                    <h3>My email is up there ^</h3>
                    <div className='list'>
                        <li>I'm looking for a summer 2023 job, particularly a webdev or fullstack job in journalism, education, AI, and/or social impact</li>
                        <li>More links: <a href= "https://www.linkedin.com/in/isabel-sieh-9b99a912a/">LinkedIn</a>, <a href="https://www.instagram.com/isabelsieh/">personal instagram</a> (?), <a href = "https://twitter.com/isaseaa">twitter</a> (incredibly inactive)</li>
                        <li>My current obsessions: <a href="https://pudding.cool/">pudding.cool</a>, World Cup, my twinsgiving in Lisbon</li>
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