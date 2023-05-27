import { AutcompleteSuggestion } from "../../types/location";
import "./Autocomplete.scss";

interface AutocompleteProps {
    className: string,
    data: AutcompleteSuggestion[],
    onAutocomplete: (location: AutcompleteSuggestion) => void
} 

export const Autocomplete = ({className = "", data = [], onAutocomplete}: AutocompleteProps) => {

    const handleSelect =(selected: AutcompleteSuggestion) => {
        onAutocomplete(selected);
    };

    return (
    <div className={`autocomplete ${className}`} tabIndex={0}>
        {
            data.map((suggestion) => (
                <div 
                    className="autocomplete__suggestion" 
                    key={suggestion.id} 
                    onClick={(e) => {handleSelect(suggestion)}}
                >
                    <span className="autocomplete__city">{suggestion.city}</span>
                    <span className="autocomplete__location-details">{suggestion.country} {suggestion.state}</span>
                </div>
            ))
        }
    </div>
  )
}
