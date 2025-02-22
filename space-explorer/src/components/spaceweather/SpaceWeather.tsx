import React, { useEffect, useState } from "react";
import { getSolarFlares, getGeomagneticStorms, getSolarRadiation, SolarFlare, GeomagneticStorm, SolarRadiation } from "../../services/spaceWeather";

const SpaceWeather: React.FC = () => {
  const [solarFlares, setSolarFlares] = useState<SolarFlare[] | null>(null);
  const [geomagneticStorms, setGeomagneticStorms] = useState<GeomagneticStorm[] | null>(null);
  const [solarRadiation, setSolarRadiation] = useState<SolarRadiation[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpaceWeather = async () => {
      const flares = await getSolarFlares();
      const storms = await getGeomagneticStorms();
      const radiation = await getSolarRadiation();

      setSolarFlares(flares);
      setGeomagneticStorms(storms);
      setSolarRadiation(radiation);
      setLoading(false);
    };

    fetchSpaceWeather();
  }, []);

  if (loading) return <p className="text-center text-blue-400">Loading Space Weather Data...</p>;

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">☀️ Space Weather Alerts</h2>

      {/* Solar Flares */}
      <div>
        <h3 className="text-xl font-semibold text-red-400">🔥 Solar Flares</h3>
        {solarFlares?.length ? (
          solarFlares.map((flare) => (
            <div key={flare.flareID} className="p-2 border-b border-gray-700">
              <p>Class: <span className="font-semibold">{flare.classType}</span></p>
              <p>Start Time: {new Date(flare.beginTime).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No solar flares detected.</p>
        )}
      </div>

      {/* Geomagnetic Storms */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-green-400">🌍 Geomagnetic Storms</h3>
        {geomagneticStorms?.length ? (
          geomagneticStorms.map((storm) => (
            <div key={storm.stormID} className="p-2 border-b border-gray-700">
              <p>Kp Index: <span className="font-semibold">{storm.kpIndex}</span></p>
              <p>Start Time: {new Date(storm.startTime).toLocaleString()}</p>
              <p>End Time: {storm.endTime ? new Date(storm.endTime).toLocaleString() : "Ongoing"}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No geomagnetic storms detected.</p>
        )}
      </div>

      {/* Solar Radiation */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-purple-400">⚡ Solar Radiation Events</h3>
        {solarRadiation?.length ? (
          solarRadiation.map((event) => (
            <div key={event.eventID} className="p-2 border-b border-gray-700">
              <p>Peak Time: {new Date(event.peakTime).toLocaleString()}</p>
              <p>Energy Level: {event.energy}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No solar radiation events detected.</p>
        )}
      </div>
    </div>
  );
};

export default SpaceWeather;
