'use client'

import React, { useState, useRef, useEffect } from 'react';
import pianoData from './pianodata';
import PianoBar from './components/PianoBar';
import VideoPlayer from './components/VideoPlayer';



function MainPage() {
  const audioRef = useRef(null);

  return (
    <main>
      <section id="piano-content">
        <p id="description">Let us take a look at some of the best piano ideas ever.</p>
        <div className="piano-bars">
          {
            pianoData.map((piano, index) => (
              <PianoBar
                text={pianoData[index].text}
                id={pianoData[index].id}
                img={pianoData[index].img}
                keyword={pianoData[index].keyword}
                title={pianoData[index].title}
              />
            ))
          }
        </div>
      </section>
      <VideoPlayer /> 
      
    </main>
  )
}

export default MainPage;