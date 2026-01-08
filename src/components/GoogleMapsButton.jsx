import React from "react";

export default function GoogleMapsButton() {
  return (
    <>
      <a
        href="https://www.google.com/maps?q=SleepWell+Cradle+Springs+Arappalayam+Madurai"
        target="_blank"
        rel="noopener noreferrer"
        className="maps-float"
        aria-label="View location on Google Maps"
      >
        {/* Tooltip */}
        <span className="maps-tooltip">View on Google Maps</span>

        {/* Map Pin Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="maps-icon"
        >
          <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
        </svg>
      </a>

      <style>{`
        .maps-float {
          position: fixed;
          bottom: 24px;
          left: 24px;
          width: 56px;
          height: 56px;
          background: #f44336; /* Google red */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          transition: transform 0.3s ease;
        }

        .maps-float:hover {
          transform: scale(1.1);
        }

        .maps-icon {
          width: 28px;
          height: 28px;
        }

        .maps-tooltip {
          position: absolute;
          left: 70px;
          background: #111;
          color: #fff;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 13px;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(5px);
          transition: all 0.3s ease;
        }

        .maps-float:hover .maps-tooltip {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
