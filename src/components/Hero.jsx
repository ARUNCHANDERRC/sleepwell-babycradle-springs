import baby_1 from "../assets/baby_1.png";
import swing from "../assets/spring with thottil.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-black">
      
      {/* 1. BACKGROUND IMAGE - STATIONARY & CLEAR */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${baby_1})` }}
      />

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 flex items-center justify-end w-full h-full">
        
        {/* SWINGING IMAGE CONTAINER */}
        <div className="animate-swing-slow 
                        /* MOBILE: Same height as baby_1 background */
                        w-[90%] 
                        h-full           /* Forces height to match baby_1 container */
                        pr-4             /* Slight gap from right edge */
                        
                        /* DESKTOP (1024px+): Constrain to prevent cutting */
                        lg:h-auto 
                        lg:max-h-[55vh] 
                        lg:w-[30%] 
                        lg:pr-20
                        
                        flex justify-end items-center">
          <img
            src={swing}
            alt="Spring with thottil"
            /* Using h-full here ensures the image fills the vertical space 
               available on mobile while object-contain prevents distortion */
            className="w-full h-[80%] lg:h-full object-contain" 
          />
        </div>
      </div>

      {/* 3. CAPTION */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full px-4 flex justify-center">
        <p className="text-white bg-black/50 backdrop-blur-md px-6 py-2 rounded-full text-xs sm:text-sm border border-white/10 text-center">
          Baby sleeps peacefully in a cozy hammock swing
        </p>
      </div>

    </section>
  );
}