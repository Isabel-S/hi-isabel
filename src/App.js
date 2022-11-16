import React, {Suspense, useRef} from "react"
import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';

import {Canvas} from "@react-three/fiber"
import Womp3 from "./components/Womp3"
import RotationWrapper from "./components/RotationWrapper";
import Overlay from "./components/Overlay";
//<OrbitControls enableZoom = {false}/>

import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);

  const { height, width } = useWindowDimensions();

  return (
    <>
    <div className= "app" style={{width: '100%', height: '100%'}}>
      <div className = "left-text">
        <h2>Hey! I'm Isabel Sieh</h2>
        <h3>Computer Science + Digital Humanities @ Stanford University</h3>
        <h3>Tech Team @ The Stanford Daily, AI Literacy Education Research @ DISTAL lab, Digital Humanities @ Gender Research</h3>
        <div className="intro">
          <img className = "profile" src={require('./images/profile2.jpg')} alt="Paris"/>
          <div className= "intro-text">
            <p>I’m curious how we can be informed. How can we inform citizens so they are empowered to make the best decisions in their world? </p>
            <p>I love tech, education, advocacy and recently, digital storytelling! Lately, I’ve been coding web experiences so students can learn better, or a news reader can get informed better – this includes interactive news articles and digital learning tools. </p>
          </div>
        </div>
      </div>
      <Canvas className="womp">
        <ambientLight intensity={0.15}/>
        <directionalLight position = {[-2, 2, 6]} intensity = {0.5} />
        
        <Suspense fallback={false}>
          <RotationWrapper scroll={scroll}>
            <Womp3 position={[0, 1, 0]} rotation={[0, 1, 0]} scale={[15, 15, 15]}/>
          </RotationWrapper>
        </Suspense>
      </Canvas>
    </div>

    <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;
export default App;
