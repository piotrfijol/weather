import { useQuery } from '@tanstack/react-query';
import { SearchLocation } from '../../types/location';
import { SearchInput } from '../SearchInput';
import { useState, useEffect } from "react";
import { fetchAutocompletion } from '../../fetch/autocompletion';

interface SearchbarProps {
    onLocationChange: (location: SearchLocation) => void
}


export const Searchbar = ({ onLocationChange }: SearchbarProps) => {
    const [search, setSearch] = useState<string>('');
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['city-autocompletion', search],
        queryFn: () => fetchAutocompletion(search),
        enabled: false
    });
    const [location, setLocation] = useState<SearchLocation>("Warsaw");

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (search !== '') {
            setLocation(search);
            setSearch("");
        }
    }

    useEffect(() => {
        let timeoutID = setTimeout(() => {
            if (search.trim() !== '')
                refetch()
        }, 500);

        return () => {
            clearTimeout(timeoutID);
        }
    }, [search]);

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
