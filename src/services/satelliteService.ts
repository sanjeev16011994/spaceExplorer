import axios from "axios";

const BASE_URL = "https://tle.ivanstanojevic.me/api/tle/";

// Define the structure of a satellite response
export interface Satellite {
  name: string;
  launch_year: string;
}

// Define API response structure
interface SatelliteApiResponse {
  member: Satellite[];
}

// Function to fetch satellite data
export const getSatellites = async (): Promise<Satellite[] | null> => {
  try {
    const response = await axios.get<SatelliteApiResponse>(BASE_URL);
    
    if (response.data?.member) {
      return response.data.member.slice(0, 5);
    }

    return null;
  } catch (error) {
    console.error("Error fetching satellite data:", error);
    return null;
  }
};
