import axios from "axios";

const NASA_API_URL = "https://images-api.nasa.gov";

// ✅ Define Types
export interface NasaImage {
  data: { title: string; nasa_id: string }[];
  links?: { href: string }[];
}

export interface NasaAsset {
  href: string;
}

export interface NasaMetadata {
  location: string;
}

export interface NasaCaption {
  location: string;
}

// ✅ Fetch NASA Images
export const searchNasaImages = async (query: string): Promise<NasaImage[]> => {
  try {
    const response = await axios.get(`${NASA_API_URL}/search`, {
      params: { q: query },
    });
    return response.data.collection.items;
  } catch (error) {
    console.error("Error fetching NASA images:", error);
    return [];
  }
};

// ✅ Get Asset by NASA ID
export const getNasaAsset = async (nasaId: string): Promise<NasaAsset[]> => {
  try {
    const response = await axios.get(`${NASA_API_URL}/asset/${nasaId}`);
    return response.data.collection.items;
  } catch (error) {
    console.error("Error fetching asset:", error);
    return [];
  }
};

// ✅ Get Metadata by NASA ID
export const getNasaMetadata = async (nasaId: string): Promise<NasaMetadata | null> => {
  try {
    const response = await axios.get(`${NASA_API_URL}/metadata/${nasaId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return null;
  }
};

// ✅ Get Captions by NASA ID
export const getNasaCaptions = async (nasaId: string): Promise<NasaCaption | null> => {
  try {
    const response = await axios.get(`${NASA_API_URL}/captions/${nasaId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching captions:", error);
    return null;
  }
};

// ✅ Get Images in an Album
export const getNasaAlbum = async (albumName: string): Promise<NasaImage[]> => {
  try {
    const response = await axios.get(`${NASA_API_URL}/album/${albumName}`);
    return response.data.collection.items;
  } catch (error) {
    console.error("Error fetching album:", error);
    return [];
  }
};
