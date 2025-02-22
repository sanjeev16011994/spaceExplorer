export const EarthData = () => {
    return (
      <div>
        <h2>🌍 Earth Observation Data</h2>
        <img
          src={`https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&dim=0.1&api_key=YOUR_NASA_API_KEY`}
          alt="Earth from Space"
          width="300"
        />
      </div>
    );
  };