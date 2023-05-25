import { SearchLocation } from "../types/location";
import config from "../config";

export const fetchWeather = async (location: SearchLocation, endpoint: string) => {
    let response;
    const BASE = import.meta.env.VITE_API_BASEURL || config.API_BASEURL;
    let url = new URL(BASE + endpoint);
    if(typeof location === "string") {
        url.searchParams.set("q", location);
    } else if (location instanceof GeolocationPosition) {
        url.searchParams.set("lon", location.coords.longitude.toString());
        url.searchParams.set("lat", location.coords.latitude.toString());
    } else {
        throw new Error("Unsupported location type.");
    }
  
    response = await fetch(url);
  
    if(!response?.ok) {
        throw new Error("There was a network problem when requesting weather data.");
    }
  
    let jsonData = await response.json();

    if(jsonData.cod != '200') {
        throw new Error(`Error${jsonData.cod} - ${jsonData.message}`);
    }

    return jsonData?.data;
  };