import { useState, useEffect } from "react";
import { NavigationIcon } from "../icons/NavigationIcon";
import "./SearchInput.scss";
import { Autocomplete } from "../Autocomplete";
import { AutcompleteSuggestion } from "../../types/location";

interface SearchInputProps {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void,
  onLocation: (position : GeolocationPosition) => void,
  value: string,
  autocomplete: AutcompleteSuggestion[],
  onAutocomplete: (selected: AutcompleteSuggestion) => void
}

export const SearchInput = ({ onLocation, onChange, value, autocomplete, onAutocomplete } : SearchInputProps) => {
  const [error, setError] = useState("");
  const [isAutocomplete, setIsAutocomplete] = useState(false);

  const getLocation = () => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        onLocation(position);
      });
    } else {
      setError("Geolocation API is either not supported by your browser or it is disabled.")
    }
  };

  useEffect(() => {
    let timeoutID: NodeJS.Timeout;
    if(error !== "")
      timeoutID = setTimeout(() => {setError("")}, 3000);
  
    return () => {
      if(timeoutID)
        clearTimeout(timeoutID);
    }
  }, [error]);

  const showAutocomplete = () => {
    setIsAutocomplete(true);
  };

  const hideAutocomplete = (e: React.FocusEvent<HTMLInputElement>) => {

    if(!e.relatedTarget?.classList.contains("autocomplete")) {
      setIsAutocomplete(false);
    }
  };

  return (
    <div className="search-container">
      {error !== ""? (
        <div className="error">
          <p role="alert" aria-live="assertive" className="error__message sr-only">{error}</p>
          <div className="error__cross-mark" aria-hidden="true"></div>
        </div>)
        : null
      }
      <button type="submit" className="search-container__submit">Search</button>
      <label className="sr-only" htmlFor="search-city">Enter the name of the city</label>
      <input 
        placeholder="London"
        autoComplete="none"
        type="search"
        name="city-name"
        id="search-city"
        onInput={onChange} 
        value={value}
        className="search-container__search"
        onFocus={showAutocomplete}
        onBlur={hideAutocomplete}
      />
      <Autocomplete 
        onAutocomplete={(selected) => {onAutocomplete(selected); setIsAutocomplete(false)}} 
        className={"search-container__autocomplete " + (isAutocomplete ? "show" : "")} 
        data={autocomplete}
      />
      <button className="navigate" type="button" onClick={getLocation} title="Click to check weather for your location">
        <NavigationIcon />
      </button>
  </div>
  )
}