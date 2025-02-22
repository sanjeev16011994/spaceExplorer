import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      {/* Rotating Planet */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full shadow-lg animate-pulse"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-lg text-blue-300 animate-pulse tracking-wider">
        Loading the Universe...
      </p>

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Twinkle Animation */}
      <style>
        {`
          @keyframes twinkle {
            from { opacity: 0.2; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
