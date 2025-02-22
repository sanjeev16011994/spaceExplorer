import React, { useEffect, useState } from "react";
import { getNeoData, NeoData } from "../../services/nasaService";

const Neo: React.FC = () => {
  const [asteroids, setAsteroids] = useState<NeoData[] | null>(null);

  useEffect(() => {
    const fetchNeo = async () => {
      const data = await getNeoData();
      setAsteroids(data);
    };
    fetchNeo();
  }, []);

  if (!asteroids)
    return (
      <p className="text-center text-blue-400">Loading asteroids data...</p>
    );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🪨 Near-Earth Objects</h2>
      <ul className="space-y-4">
        {asteroids.map((neo) => (
          <li key={neo.id} className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">{neo.name}</h3>
            <p>
              Max Diameter:{" "}
              {neo.estimated_diameter.kilometers.estimated_diameter_max} km
            </p>
            <p>
              Close Approach: {neo.close_approach_data[0].close_approach_date}
            </p>
            <p>
              Miss Distance:{" "}
              {neo.close_approach_data[0].miss_distance.kilometers} km
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Neo;
