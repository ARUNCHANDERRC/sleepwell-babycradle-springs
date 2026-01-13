import baby_1 from '../assets/baby_1.png';
import swing from '../assets/spring with thottil_2.png'; // transparent PNG

export default function Hero() {
  return (
    <section
  id="home"
  className="relative w-full h-[100svh] overflow-hidden bg-black"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${baby_1})` }}
  />

  {/* Swing Container */}
  <div className="relative z-10 w-full h-full flex justify-end items-center">
    <div className="
      animate-swing-slow
      origin-top
      h-full w-[95%] flex items-center justify-end pr-2
      lg:h-[75vh] lg:w-[45%] lg:pr-16
      drop-shadow-2xl
    ">
      <img
        src={swing}
        alt="Spring with thottil"
        className="h-[90%] w-auto object-contain sm:h-full lg:h-full"
      />
    </div>
  </div>

  {/* Caption with playful font and glow */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-4">
    <p className="
      text-white
      text-base sm:text-lg lg:text-2xl
      font-handwriting font-semibold
      tracking-wide
      bg-black/50 backdrop-blur-lg
      px-6 sm:px-8 py-3 sm:py-4
      rounded-full
      border border-white/20
      shadow-xl shadow-black/50
      text-center
    ">
      Baby sleeps peacefully in a cozy hammock swing
    </p>
  </div>

  {/* Optional sparkle accents */}
  <div className="absolute inset-0 pointer-events-none">
    <span className="absolute top-10 left-20 text-white/70 text-lg animate-float">✨</span>
    <span className="absolute top-32 right-16 text-white/50 text-2xl animate-float delay-300">✨</span>
    <span className="absolute bottom-20 left-1/3 text-white/60 text-xl animate-float delay-600">✨</span>
  </div>
</section>

  );
}
