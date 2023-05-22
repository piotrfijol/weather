import "./InfoEntry.scss";

interface InfoEntryProps {
    icon: string,
    info: string,
    alt: string
}

export const InfoEntry = ({icon, info, alt}: InfoEntryProps) => {
  return (
    <div className="info">
      <img className="info__icon" src={icon} alt={alt} /> 
      <span className="info__label">{info}</span>
    </div>
  )
}
