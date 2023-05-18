import { SearchInput } from '../SearchInput';
import { useState, useEffect } from "react";

export const Searchbar = () => {
    const [search, setSearch]     = useState<string>('');
    const [location, setLocation] = useState<string|GeolocationPosition>("");

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLocation(search);
    }

    const handleOnLocation = (position: GeolocationPosition) => {
        setLocation(position);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    };

  return (
    <form onSubmit={handleOnSubmit}>
        <SearchInput 
            onChange={handleInputChange}
            onLocation={handleOnLocation}
            value={search} 
        />
    </form>
  )
}
