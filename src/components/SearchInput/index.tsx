import { KeyboardEvent } from "react";
import { NavigationIcon } from "../icons/NavigationIcon";
import "./SearchInput.scss";

interface SearchInputProps {
  onChange: (ev: KeyboardEvent<HTMLInputElement>) => void,
  value: string
}

export const SearchInput = ({ onChange, value } : SearchInputProps) => {

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
      <div className="navigate">
        <NavigationIcon />
      </div>
    </div>
  )
}
