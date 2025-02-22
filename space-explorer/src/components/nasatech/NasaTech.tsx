export const NasaTech = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get("https://api.nasa.gov/techtransfer/patent/?engine&api_key=YOUR_NASA_API_KEY")
        .then((res) => {
          setTechs(res.data.results.slice(0, 5));
          setLoading(false);
        });
    }, []);
  
    return loading ? <p>Loading...</p> : (
      <div>
        <h2>🛠️ NASA Tech & Research</h2>
        {techs.map((tech, index) => (
          <div key={index}>
            <p>{tech[2]}</p>
          </div>
        ))}
      </div>
    );
  };