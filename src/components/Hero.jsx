import { useState, useEffect } from 'react';
import heroImg from '../assets/hero-bg.png';
import swing from '../assets/swing.png';

export default function Hero() {
  const sentence = "Baby Sleep With Mother's Touch";
  const typingSpeed = 240;
  const restartDelay = 2600;

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (index < sentence.length) {
      timer = setTimeout(() => {
        setText((prev) => prev + sentence[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText('');
        setIndex(0);
      }, restartDelay);
    }

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative w-full bg-pink-100" id="home">
      {/* HERO BACKGROUND IMAGE */}
      <img
        src={heroImg}
        alt="SleepWell Cradle Springs"
        className="w-full h-auto object-cover"
      />

      {/* SWING IMAGE – RIGHT SIDE, NO BG */}
      <div className="absolute inset-0 flex items-center justify-end pr-6 sm:pr-10 md:pr-16">
        <img
          src={swing}
          alt="Swing"
          className="w-48 sm:w-56 md:w-72 lg:w-80 object-contain animate-float-zoom"
        />
      </div>

      {/* TEXT OVERLAY */}
      <div className="absolute top-4 right-4 text-right px-4 py-2">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold neon-text animate-slideUp">
          {text}
          <span className="neon-cursor">|</span>
        </h1>
      </div>
    </section>
  );
}
