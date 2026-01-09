import { useState, useEffect, useRef } from 'react';
import baby_1 from '../assets/baby_1.png';
import baby_2 from '../assets/baby_2.png';
import baby_3 from '../assets/baby_3.png';
import swing from '../assets/swing.png';

export default function Hero() {
  const slides = [
    { img: baby_1, caption: "Baby sleeps peacefully with mother’s touch" },
    { img: baby_2, caption: "Baby enjoys comfort while sitting calmly" },
    { img: baby_3, caption: "Joyful baby laughter brings happiness" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const typingSpeed = 100; // ms per character
  const restartDelay = 2000; // pause before next slide

  // Typing effect
  useEffect(() => {
    let timer;
    const caption = slides[currentSlide].caption;

    if (charIndex < caption.length) {
      timer = setTimeout(() => {
        setTypedText((prev) => prev + caption[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText('');
        setCharIndex(0);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, restartDelay);
    }

    return () => clearTimeout(timer);
  }, [charIndex, currentSlide, slides]);

  // Manual navigation
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTypedText('');
    setCharIndex(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTypedText('');
    setCharIndex(0);
  };

  // Swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    else if (touchEndX.current - touchStartX.current > 50) prevSlide();
  };

  return (
    <section
      className="relative w-full h-[90vh] overflow-hidden bg-pink-100"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel images */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.img}
          alt={`Slide ${i + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
            ${i === currentSlide ? 'opacity-100 animate-zoom-in-out' : 'opacity-0'}`}
        />
      ))}

      {/* Swing image + caption */}
      <div className="absolute inset-0 flex items-center justify-start pl-6 sm:pl-10 md:pl-16 space-x-6 animate-swing">
        <img
          src={swing}
          alt="Swing"
          className="
            w-auto 
            h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[40rem] 
            object-contain
          "
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 bg-white/50 backdrop-blur p-2 rounded-lg shadow-md max-w-xs md:max-w-md">
          {typedText}
          <span className="animate-blink">|</span>
        </h2>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide ? 'bg-indigo-700 scale-125' : 'bg-gray-300'
            }`}
            onClick={() => {
              setCurrentSlide(i);
              setTypedText('');
              setCharIndex(0);
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 rounded-full p-2 shadow-md transition"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 rounded-full p-2 shadow-md transition"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </section>
  );
}
