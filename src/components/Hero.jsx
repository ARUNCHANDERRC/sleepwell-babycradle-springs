import React from "react";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative text-gray-900 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Floating icons */}
      <span className="absolute top-32 left-10 text-3xl animate-float">🍼</span>
      <span className="absolute bottom-24 right-16 text-3xl animate-float delay-200">💤</span>
      <span className="absolute top-44 right-1/4 text-3xl animate-float delay-400">👶</span>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-blue-900 tracking-tight animate-fadeUp">
          Baby Sleep With{" "}
          <span className="text-pink-600">Mother’s Touch</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-800 mb-5 animate-fadeUp delay-200">
          Premium cradle springs and baby comfort products trusted by parents
          for safe, peaceful sleep.
        </p>

        <a
          href="#products"
          className="
            inline-block px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg
            transition-all duration-300
            hover:bg-blue-800 hover:scale-105
            shadow-lg animate-fadeUp delay-400
          "
        >
          Explore Products
        </a>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
