import { SearchLocation } from '../../types/location';
import { SearchInput } from '../SearchInput';
import { useState, useEffect } from "react";

interface SearchbarProps {
    onLocationChange: (location: SearchLocation) => void
}

export const Searchbar = ({ onLocationChange }: SearchbarProps) => {
    const [search, setSearch]     = useState<string>('');
    const [location, setLocation] = useState<SearchLocation>("Warsaw");

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLocation(search);
        setSearch("");
    }

    const handleOnLocation = (position: GeolocationPosition) => {
        setLocation(position);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    };

    useEffect(() => {
        onLocationChange(location);
    }, [location, onLocationChange]);

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
