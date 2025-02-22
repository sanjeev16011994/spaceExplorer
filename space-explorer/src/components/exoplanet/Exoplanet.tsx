import React, { useEffect, useState } from "react";
import { getExoplanets, Exoplanet } from "../../services/exoplanetService";

const Exoplanets: React.FC = () => {
  const [planets, setPlanets] = useState<Exoplanet[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExoplanets = async () => {
      const data = await getExoplanets();
      setPlanets(data);
      setLoading(false);
    };

    fetchExoplanets();
  }, []);

  if (loading)
    return (
      <p className="text-center text-blue-400">Loading exoplanet data...</p>
    );

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        🔭 Exoplanet Discoveries
      </h2>

      {planets?.length ? (
        planets.map((planet, index) => (
          <div key={index} className="p-2 border-b border-gray-700">
            <p>
              <span className="font-semibold">Name:</span> {planet.pl_name}
            </p>
            <p>
              <span className="font-semibold">Size:</span>{" "}
              {planet.pl_rade ? `${planet.pl_rade} Earth radii` : "Unknown"}
            </p>
            <p>
              <span className="font-semibold">Orbital Period:</span>{" "}
              {planet.pl_orbper ? `${planet.pl_orbper} days` : "Unknown"}
            </p>
            <p>
              <span className="font-semibold">Temperature:</span>{" "}
              {planet.pl_eqt ? `${planet.pl_eqt} K` : "Unknown"}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No exoplanets found.</p>
      )}
    </div>
  );
};

export default Exoplanets;
