import React from "react";

export default function WhatsAppButton() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919791526864?text=Hello%20SleepWell%20Cradle%20Springs%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with SleepWell on WhatsApp"
      >
        {/* Tooltip */}
        <span className="whatsapp-tooltip">Chat with us</span>

        {/* Icon */}
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="white"
  className="whatsapp-icon"
>
  <path d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 2.1.55 4.15 1.6 5.96L2 22l4.27-1.7a9.86 9.86 0 0 0 5.77 1.84h.01c5.46 0 9.89-4.43 9.89-9.89S17.5 2 12.04 2zm5.73 14.29c-.24.67-1.4 1.29-1.93 1.37-.5.08-1.13.11-1.82-.12-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.24-4.96-4.43-.13-.18-1.19-1.59-1.19-3.03s.75-2.15 1.02-2.44c.27-.29.6-.37.8-.37h.58c.18 0 .42-.02.65.5.24.54.82 1.88.9 2.02.08.13.13.29.03.47-.1.18-.15.29-.3.45-.15.16-.32.36-.46.48-.15.13-.31.27-.13.55.18.29.8 1.31 1.72 2.12 1.18 1.05 2.18 1.38 2.47 1.54.29.15.46.13.63-.08.18-.21.73-.85.92-1.14.19-.29.39-.24.65-.15.27.1 1.68.79 1.97.94.29.15.48.22.55.34.06.12.06.69-.18 1.36z"/>
</svg>

      </a>

      {/* Styles */}
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          animation: pulse 2.5s infinite;
        }

        .whatsapp-icon {
          width: 28px;
          height: 28px;
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
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

        .whatsapp-float:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
}
