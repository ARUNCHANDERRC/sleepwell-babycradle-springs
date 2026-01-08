export default function About() {
  return (
    <section id="about" className="bg-rose-50 text-gray-800 py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Us
        </h3>

        {/* Description */}
        <p className="text-lg md:text-xl text-center mb-12 leading-relaxed text-gray-700">
          <strong>Sleepwell Industries – Madurai</strong>  
          <br />
          Specialist Baby Cradle Spring Manufacturer since 1973
        </p>

        {/* Key Points */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <p className="text-lg md:text-xl">
              <strong>50+ Years Excellence:</strong> Established in 1973, providing trusted manufacturing expertise in Madurai.
            </p>
            <p className="text-lg md:text-xl">
              <strong>Safety Focused:</strong> Specialist in high-tensile Baby Cradle Springs (Thottil Springs) and secure suspension for newborns.
            </p>
            <p className="text-lg md:text-xl">
              <strong>Premium Products:</strong> Manufacturing Heavy-Duty Extension Springs and rust-resistant SS Cradle Hangers.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg md:text-xl">
              <strong>Material Quality:</strong> Durable options in both high-tensile steel and Stainless Steel (SS).
            </p>
            <p className="text-lg md:text-xl">
              <strong>Wholesale & Retail:</strong> Leading supplier for Tamil Nadu, Andhra Pradesh, Karnataka, and Kerala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
