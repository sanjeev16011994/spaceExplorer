import axios from "axios";

const API_KEY = import.meta.env.VITE_NASA_API_KEY; // Use environment variable for security
const BASE_URL = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync";

/**
 * Type definition for an Exoplanet.
 */
export interface Exoplanet {
  pl_name: string; // Planet name
  pl_rade?: number; // Radius in Earth radii
  pl_orbper?: number; // Orbital period in days
  pl_eqt?: number; // Equilibrium temperature in Kelvin
  hostname?: string; // Host star name
}

/**
 * Fetches a list of exoplanets from NASA API.
 * @returns A list of exoplanets or null if an error occurs.
 */
export const getExoplanets = async (): Promise<Exoplanet[] | null> => {
  try {
    const query = encodeURIComponent(
      "SELECT pl_name, pl_rade, pl_orbper, pl_eqt, hostname FROM ps WHERE pl_rade IS NOT NULL ORDER BY pl_rade DESC LIMIT 5"
    );

    const response = await axios.get<{ data: Exoplanet[] }>(
      `${BASE_URL}?query=${query}&format=json&api_key=${API_KEY}`
    );

    return response.data.data; // Extract data array
  } catch (error) {
    console.error("Error fetching exoplanet data:", error);
    return null;
  }
};
