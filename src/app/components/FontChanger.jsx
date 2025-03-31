"use client"
import React, { useState, useEffect, useMemo } from 'react';

const FontChanger = () => {
  // Define an array of fonts to cycle through
  const fonts = useMemo(() => ['Albra Bold', 'FiraCode', 'Intro Inline', 'DidotBoldItalic'], []);
  const words = useMemo(() => ['inovação', 'educação', 'CONEXÃO', 'TRANSFORMAÇÃO'], [])
  const textTransform = useMemo(() => ['uppercase', 'lowercase', 'uppercase', 'lowercase'], [])

  // State to keep track of the current font index
  const [fontIndex, setFontIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0)
  const [transformIndex, setTransformIndex] = useState(0)

  // State to store the current font style
  const [currentFont, setCurrentFont] = useState(fonts[0]);
  const [currentWord, setCurrentWord] = useState(words[0])
  const [currentTransform, setCurrentTransform] = useState(textTransform[0])
  // Function to update the font style at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the font index or loop back to 0
      const newIndex = (fontIndex + 1) % fonts.length;
      setFontIndex(newIndex);
      setCurrentFont(fonts[newIndex]);

      const newWordIndex = (wordIndex + 1) % words.length
      setWordIndex(newWordIndex)
      setCurrentWord(words[newWordIndex])

      const newTransformIndex = (transformIndex + 1) % textTransform.length
      setTransformIndex(newTransformIndex)
      setCurrentTransform(textTransform[newTransformIndex])
    }, 2000); // Change font every 2 seconds (2000 milliseconds)

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [fontIndex, fonts, wordIndex, words, transformIndex, textTransform]);

  return (
    <div>
      <h1
        className='text-4xl lg:text-6xl text-[#ffff00]'
        style={{ fontFamily: currentFont, textTransform: currentTransform }}
      >{currentWord}</h1>

    </div>
  );
};

export default FontChanger;
