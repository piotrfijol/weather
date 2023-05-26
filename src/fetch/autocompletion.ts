import config from "../config";

export const fetchAutocompletion = async (location: string) => {

    const BASE = import.meta.env.VITE_API_BASEURL || config.API_BASEURL;
    const url = new URL(BASE + "autocomplete");
    url.searchParams.set("text", location);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("The network problem occured during requesting weather data.");
    }

    let jsonData = await response.json();

    if(jsonData.statusCode === 404) {
        return [];
    }

    if(jsonData.hasOwnProperty('statusCode') && jsonData.statusCode != 200) {
        throw new Error(`Error${jsonData.statusCode} - ${jsonData.message}`);
    }

    return jsonData;
};