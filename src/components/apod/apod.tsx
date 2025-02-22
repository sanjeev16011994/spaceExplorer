import React, { useEffect, useState } from "react";
import { getApod } from "../../services/nasaService";
import { ApodData } from "../../types/nasaTypes";

const Apod: React.FC = () => {
  const [apod, setApod] = useState<ApodData | null>(null);

  useEffect(() => {
    const fetchApod = async () => {
      const data = await getApod();
      setApod(data);
    };
    fetchApod();
  }, []);

  if (!apod) return <p className="text-center text-blue-400 text-xl">🚀 Loading the Universe...</p>;

  return (
    <div className=" mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-4">
        🌌 Astronomy Picture of the Day
      </h2>

      {apod.media_type === "image" ? (
        <div className="flex flex-col items-center">
          <img
            src={apod.url}
            alt={apod.title}
            className="w-full rounded-lg shadow-md border-2 border-blue-500"
          />
        </div>
      ) : (
        <p className="text-center text-gray-400">📽️ Today's APOD is a video. Please check NASA's website.</p>
      )}

      <h3 className="text-2xl font-semibold text-blue-300 mt-4">{apod.title}</h3>
      <p className="mt-2 text-gray-300 leading-relaxed">{apod.explanation}</p>
    </div>
  );
};

export default Apod;
