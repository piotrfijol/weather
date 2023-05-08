import { KeyboardEvent } from "react";
import { NavigationIcon } from "../icons/NavigationIcon";
import "./SearchInput.scss";

interface SearchInputProps {
  onChange: (ev: KeyboardEvent<HTMLInputElement>) => void,
  onLocation: (position : GeolocationPosition) => void,
  value: string
}

export const SearchInput = ({ onLocation, onChange, value } : SearchInputProps) => {

  const getLocation = () => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        onLocation(position);
      });
    }
  };

  return (
    <div className="search-container">
      <label className="sr-only" htmlFor="search-city">Enter the name of the city</label>
      <input 
        placeholder="London"
        autoComplete="none"
        type="search"
        name="city-name"
        id="search-city"
        onInput={onChange} 
        value={value}
      />
      <button className="navigate" type="button" onClick={getLocation}>
        <NavigationIcon />
        <span className="sr-only">Click to find your location</span>
      </button>
  </div>
  )
}
