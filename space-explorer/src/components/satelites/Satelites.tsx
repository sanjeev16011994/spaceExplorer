export const Satellites = () => {
    const [satellites, setSatellites] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get("https://tle.ivanstanojevic.me/api/tle/").then((res) => {
        setSatellites(res.data.member.slice(0, 5));
        setLoading(false);
      });
    }, []);
  
    return loading ? <p>Loading...</p> : (
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