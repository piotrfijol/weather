import "./Autocomplete.scss";

export const Autocomplete = ({className = ""}) => {
  return (
    <div className={`autocomplete ${className}`}>
        <div className="autocomplete__suggestion">
        <span className="autocomplete__city">Kielce</span>
        <span className="autocomplete__location-details">Poland, Świętokrzyskie</span>
        </div>
        <div className="autocomplete__suggestion">
        <span className="autocomplete__city">Kielce</span>
        <span className="autocomplete__location-details">Poland, Świętokrzyskie</span>
        </div>
    </div>
  )
}
