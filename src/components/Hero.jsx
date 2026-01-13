import baby_1 from '../assets/baby_1.png';
import swing from '../assets/spring with thottil_2.png'; // transparent PNG

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-black">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${baby_1})` }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full flex justify-end items-center">
        {/* SWING CONTAINER */}
        <div
          className="
            animate-swing-slow
            origin-top
            h-full
            w-[95%]
            flex items-center justify-end
            pr-2

            lg:h-[75vh]        /* ⬅️ BIGGER on desktop */
            lg:w-[45%]         /* ⬅️ wider on desktop */
            lg:pr-16
          "
        >
          <img
            src={swing}
            alt="Spring with thottil"
            className="
              h-[90%]
              w-auto
              object-contain

              sm:h-full
              lg:h-full
            "
          />
        </div>
      </div>

      {/* CAPTION */}
      {/* CAPTION */}
      {/* CAPTION */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 animate-swing-slow">
        <p className="
  text-white
  text-xs sm:text-sm lg:text-xl xl:text-2xl
  font-semibold tracking-wide
  bg-black/60 backdrop-blur-lg
  px-6 sm:px-8 py-2.5 sm:py-3
  rounded-full
  border border-white/20
  shadow-lg shadow-black/40
  text-center
">
  Baby Sleeps Peacefully with Mother's Touch
</p>

      </div>
    </section>
  );
}
