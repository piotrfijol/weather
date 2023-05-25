import { SearchLocation } from "../types/location";

export const fetchWeather = async (location: SearchLocation, endpoint: string) => {
    let response;
    let url = new URL("https://weatherapp-server.melaryk.repl.co/api/" + endpoint);
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