import { useState } from "react";

// Images (jpeg)
import PremiumImg from "../assets/premium-quality.jpeg";
import ExportImg from "../assets/export-quality.jpeg";
import HangerImg from "../assets/hanger-spring.jpeg";

export default function Products() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeImageModal, setActiveImageModal] = useState(null);

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
        <h3 className="text-5xl font-extrabold text-center mb-16 text-blue-800 tracking-wide">
          Our Premium Products
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="relative bg-white rounded-3xl p-10 text-center shadow-xl overflow-hidden"
            >
              {/* Floating SVG Icons */}
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-6 left-6 text-blue-400 animate-float">ℹ️</span>
                <span className="absolute top-10 right-8 text-yellow-400 animate-float delay-200">⭐</span>
                <span className="absolute bottom-8 left-10 text-red-400 animate-float delay-400">❤️</span>
              </div>

              {/* Image */}
              <div
                onClick={() => setActiveImageModal(index)}
                className="h-64 w-64 mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h4 className="text-2xl font-extrabold text-orange-700 mb-2">
                {product.name}
              </h4>

              <p className="text-lg font-semibold text-gray-700 mb-4">
                {product.description}
              </p>

              <button
                onClick={() => setActiveModal(index)}
                className="
                  px-7 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg
                  transition hover:bg-blue-800 hover:scale-105 shadow-md
                "
              >
                Learn More
              </button>

              {/* Learn More Modal */}
              {activeModal === index && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl p-8 max-w-lg relative shadow-2xl">
                    <h3 className="text-3xl font-extrabold text-center text-orange-700 mb-6">
                      {product.name}
                    </h3>

                    <p className="text-gray-700 text-lg mb-4 font-semibold">
                      {product.description}
                    </p>

                    <p className="text-gray-800 leading-relaxed">
                      {product.details.split("Weight Support:")[0]}
                      <br />
                      <span className="block mt-3 font-bold text-blue-700">
                        Weight Support:{" "}
                        {product.details.split("Weight Support:")[1]}
                      </span>
                    </p>

                    <button
                      onClick={() => setActiveModal(null)}
                      className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-black"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* Full Image Modal */}
              {activeImageModal === index && (
                <div
                  onClick={() => setActiveImageModal(null)}
                  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[70vh] max-w-[90vw] rounded-2xl shadow-2xl"
                  />
                </div>
              )}
            </div>
          ))}
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
}
