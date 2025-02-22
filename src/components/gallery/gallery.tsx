import { useEffect, useState } from "react";
import { searchNasaImages, NasaImage } from "../../services/nasaDataService";

export const NasaGallery = () => {
  const [images, setImages] = useState<NasaImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("mars");

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const data = await searchNasaImages(query);
      setImages(data);
      setLoading(false);
    };
    fetchImages();
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-8">
      {/* 🌟 Title */}
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">
        🚀 NASA Image Gallery
      </h2>

      {/* 🔍 Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search NASA images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 text-gray-900 bg-white rounded-lg shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* 📸 Image Grid */}
      {loading ? (
        <p className="text-center text-gray-300 text-lg">Loading images...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              {item.links?.[0]?.href && (
                <img
                  src={item.links[0].href}
                  alt={item.data?.[0]?.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              )}
              <p className="mt-2 text-sm text-gray-300 text-center">
                {item.data?.[0]?.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
