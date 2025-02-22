import React, { useEffect, useState } from "react";
import { getMarsPhotos, MarsPhoto } from "../../services/nasaService";

const MarsRover: React.FC = () => {
  const [photos, setPhotos] = useState<MarsPhoto[] | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getMarsPhotos();
      setPhotos(data);
    };
    fetchPhotos();
  }, []);

  if (!photos) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🔴 Mars Rover Photos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-gray-800 p-3 rounded-lg">
            <img
              src={photo.img_src}
              alt="Mars Rover"
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="mt-2">{photo.camera.full_name}</p>
            <p className="text-gray-400">📅 {photo.earth_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarsRover;
