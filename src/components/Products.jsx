import { useState } from "react";
import { useSwipeable } from "react-swipeable";

// Images
import PremiumImg from "../assets/Spring_one.jpeg";
import ExportImg from "../assets/Spring_two.jpeg";
import HangerImg from "../assets/Spring_three.jpeg";

export default function Products() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeImageModal, setActiveImageModal] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // for mobile swipe

  const products = [
    {
      name: "Premium Quality",
      description: "Ultra-Smooth Bounce",
      image: PremiumImg,
      details:
        "Designed to provide a gentle, womb-like rhythmic motion that helps babies fall asleep faster and stay asleep longer. Weight Support: Up to 15kg",
    },
    {
      name: "Export Quality",
      description: "Heavy-Duty Safety",
      image: ExportImg,
      details:
        "Crafted from high-tension Stainless Steel to ensure strength and long-lasting elasticity. Weight Support: Up to 20kg",
    },
    {
      name: "Hanger Spring",
      description: "Noise-Free Operation",
      image: HangerImg,
      details:
        "Engineered to prevent squeaking sounds for a silent and peaceful sleeping environment. Weight Support: Up to 15kg",
    },
  ];

  // Swipe handlers for mobile
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % products.length),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev - 1 + products.length) % products.length),
    trackMouse: true,
  });

  return (
    <section
      id="products"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #e0f2fe, #fdf2f8, #ecfeff)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 12s ease infinite",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-800 tracking-wide">
          Our Premium Products
        </h3>

        {/* Desktop & Tablet Grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              activeModal={activeModal}
              setActiveModal={setActiveModal}
              activeImageModal={activeImageModal}
              setActiveImageModal={setActiveImageModal}
            />
          ))}
        </div>

        {/* Mobile Swipe Carousel */}
        <div className="sm:hidden relative" {...handlers}>
          <ProductCard
            product={products[currentIndex]}
            index={currentIndex}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            activeImageModal={activeImageModal}
            setActiveImageModal={setActiveImageModal}
          />

          {/* Swipe Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {products.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === currentIndex ? "bg-blue-700" : "bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes scaleUp {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}

// Product Card Component
function ProductCard({
  product,
  index,
  activeModal,
  setActiveModal,
  activeImageModal,
  setActiveImageModal,
}) {
  return (
    <div className="relative bg-white rounded-3xl p-6 md:p-10 text-center shadow-xl overflow-hidden transform transition hover:scale-105 w-full mx-auto group">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-4 left-4 text-blue-400 animate-float">ℹ️</span>
        <span className="absolute top-6 right-6 text-yellow-400 animate-float delay-200">⭐</span>
        <span className="absolute bottom-6 left-8 text-red-400 animate-float delay-400">❤️</span>
      </div>

      {/* Image Container */}
      <div
        className="relative w-full h-64 md:h-64 mb-6 md:mb-8 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setActiveImageModal(index)} // Click works for all screens
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover overlay (desktop only) */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center bg-black/50 pointer-events-none">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl animate-scaleUp"
          />
        </div>
      </div>

      {/* Product Info */}
      <h4 className="text-xl md:text-2xl font-extrabold text-orange-700 mb-1 md:mb-2">
        {product.name}
      </h4>

      <p className="text-md md:text-lg font-semibold text-gray-700 mb-4">
        {product.description}
      </p>

      <button
        onClick={() => setActiveModal(index)}
        className="px-6 md:px-7 py-2 md:py-3 rounded-xl bg-blue-700 text-white font-bold text-md md:text-lg transition hover:bg-blue-800 hover:scale-105 shadow-md"
      >
        Learn More
      </button>

      {/* Learn More Modal */}
      {activeModal === index && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md md:max-w-lg relative shadow-2xl animate-scaleUp">
            <h3 className="text-2xl md:text-3xl font-extrabold text-center text-orange-700 mb-4 md:mb-6">
              {product.name}
            </h3>

            <p className="text-gray-700 text-md md:text-lg mb-3 font-semibold">
              {product.description}
            </p>

            <p className="text-gray-800 leading-relaxed text-sm md:text-base">
              {product.details.split("Weight Support:")[0]}
              <br />
              <span className="block mt-2 md:mt-3 font-bold text-blue-700">
                Weight Support: {product.details.split("Weight Support:")[1]}
              </span>
            </p>

            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-3 md:top-4 right-3 md:right-4 text-2xl md:text-3xl font-bold text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Full Image Modal (Click works on all screens) */}
      {activeImageModal === index && (
        <div
          onClick={() => setActiveImageModal(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl animate-scaleUp"
          />
        </div>
      )}
    </div>
  );
}

