import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-red-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-gray-700 tracking-widest uppercase">
            Contact Us
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-800">
            Reach out to us for product enquiries, quotations, or business collaborations.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-3xl shadow-lg p-10 max-w-5xl w-full">

            <h3 className="text-xl font-bold text-gray-900 mb-8">
              SleepWell Cradle Springs
            </h3>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

              {/* LEFT - Address */}
              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  {/* Map Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-red-600"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                  </svg>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SleepWell+Cradle+Springs+Arappalayam+Madurai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 leading-relaxed hover:text-black"
                  >
                    82 A, West Ponnagaram 7th Street,<br />
                    Arappalayam,<br />
                    Madurai – 625016.<br />
                    <span className="font-semibold text-gray-900">
                      Mobile:
                    </span>{" "}
                    9360015056, 9791526864
                    <div className="text-sm font-medium mt-1 text-gray-600">
                      View on Google Maps →
                    </div>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="h-6 w-6 text-[#25D366]"
                    fill="currentColor"
                  >
                    <path d="M16 2.933c-7.203 0-13.067 5.864-13.067 13.067 0 2.56.747 5.053 2.16 7.173L2.667 29.067l6.053-1.973A12.95 12.95 0 0016 29.067c7.203 0 13.067-5.864 13.067-13.067S23.203 2.933 16 2.933z"/>
                  </svg>

                  <p className="text-gray-700 font-medium">
                    WhatsApp:
                    <a
                      href="https://wa.me/919791526864"
                      className="ml-2 text-black font-semibold hover:underline"
                    >
                      +91 97915 26864
                    </a>
                  </p>
                </div>

              </div>

              {/* RIGHT - Google Map */}
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <iframe
                  title="SleepWell Cradle Springs Location"
                  src="https://www.google.com/maps?q=SleepWell+Cradle+Springs+Arappalayam+Madurai&output=embed"
                  className="w-full h-[320px]"
                  loading="lazy"
                ></iframe>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
