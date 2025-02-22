import axios from "axios";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/DONKI";

export interface SolarFlare {
  flareID: string;
  classType: string;
  beginTime: string;
}

export interface GeomagneticStorm {
  stormID: string;
  kpIndex: number;
  startTime: string;
  endTime: string;
}

export interface SolarRadiation {
  eventID: string;
  peakTime: string;
  energy: string;
}

export const getSolarFlares = async (): Promise<SolarFlare[] | null> => {
  try {
    const response = await axios.get<SolarFlare[]>(`${BASE_URL}/FLR?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Solar Flares:", error);
    return null;
  }
};

export const getGeomagneticStorms = async (): Promise<GeomagneticStorm[] | null> => {
  try {
    const response = await axios.get<GeomagneticStorm[]>(`${BASE_URL}/GST?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Geomagnetic Storms:", error);
    return null;
  }
};

export const getSolarRadiation = async (): Promise<SolarRadiation[] | null> => {
  try {
    const response = await axios.get<SolarRadiation[]>(`${BASE_URL}/SEP?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Solar Radiation Events:", error);
    return null;
  }
};
