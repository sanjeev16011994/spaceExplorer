import axios from "axios";
import { ApodData } from "../types/nasaTypes";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov";

export const getApod = async (): Promise<ApodData | null> => {
  try {
    const response = await axios.get<ApodData>(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching APOD:", error);
    return null;
  }
};

export interface NeoData {
    id: string;
    name: string;
    estimated_diameter: {
      kilometers: { estimated_diameter_max: number };
    };
    close_approach_data: [{ close_approach_date: string; miss_distance: { kilometers: string } }];
  }
  
  export const getNeoData = async (): Promise<NeoData[] | null> => {
    try {
      const response = await axios.get(`${BASE_URL}/neo/rest/v1/feed?api_key=${API_KEY}`);
      return response.data.near_earth_objects[Object.keys(response.data.near_earth_objects)[0]];
    } catch (error) {
      console.error("Error fetching NEO data:", error);
      return null;
    }
  };

  
  export interface MarsPhoto {
    id: number;
    img_src: string;
    earth_date: string;
    camera: { full_name: string };
  }
  
  export const getMarsPhotos = async (): Promise<MarsPhoto[] | null> => {
    try {
      const response = await axios.get(`${BASE_URL}/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
      return response.data.photos.slice(0, 10);
    } catch (error) {
      console.error("Error fetching Mars Rover photos:", error);
      return null;
    }
  };
  
