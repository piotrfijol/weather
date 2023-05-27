import { useQuery } from '@tanstack/react-query';
import { SearchLocation } from '../../types/location';
import { SearchInput } from '../SearchInput';
import { useState, useEffect } from "react";
import { fetchAutocompletion } from '../../fetch/autocompletion';
import { AutcompleteSuggestion } from '../../types/location';

interface SearchbarProps {
    onLocationChange: (location: SearchLocation) => void
}


export const Searchbar = ({ onLocationChange }: SearchbarProps) => {
    const [search, setSearch] = useState<string>('');
    const [location, setLocation] = useState<SearchLocation>("Warsaw");
    const { data, refetch } = useQuery({
        queryKey: ['city-autocompletion', search],
        queryFn: () => fetchAutocompletion(search),
        enabled: false
    });

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let searchTrimmed = search.trim();
        
        if (searchTrimmed !== '') {
            setLocation(searchTrimmed);
            setSearch("");
        }
    }

    useEffect(() => {
        let timeoutID = setTimeout(() => {
            if (search.trim() !== '')
                refetch()
        }, 300);

        return () => {
            clearTimeout(timeoutID);
        }
    }, [search]);

    const handleOnLocation = (position: GeolocationPosition) => {
        setLocation(position);
    };

    const handleOnAutocomplete = (location: AutcompleteSuggestion) => {
        setLocation(location);
    }

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
                onAutocomplete={handleOnAutocomplete}
                value={search}
                autocomplete={data}
            />
        </form>
    )
}
