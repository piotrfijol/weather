import "./InfoEntry.scss";

interface InfoEntryProps {
    icon: string | React.ReactNode,
    info: string,
    alt: string
}

export const InfoEntry = ({icon, info, alt}: InfoEntryProps) => {
  return (
    <div className="info">
      {typeof icon === "string" 
        ? <img className="info__icon" src={icon} alt={alt} /> 
        : icon
      }
      <span className="info__label">{info}</span>
    </div>
  )
}
