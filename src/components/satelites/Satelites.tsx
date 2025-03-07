import { useState, useEffect } from "react";
import { getSatellites, Satellite } from "../../services/satelliteService";

export const Satellites = () => {
  const [satellites, setSatellites] = useState<Satellite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSatellites = async () => {
      const data = await getSatellites();
      if (data) {
        setSatellites(data);
      }
      setLoading(false);
    };

    fetchSatellites();
  }, []);

  if (loading)
    return <p className="text-center text-blue-400">Loading satelite data...</p>;

  return (
    <div>
      <h2>🛰️ Satellite Tracking</h2>
      {satellites.map((sat, index) => (
        <div key={index}>
          <p>Name: {sat.name}</p>
          <p>Launch Year: {sat.launch_year}</p>
        </div>
      ))}
    </div>
  );
};
