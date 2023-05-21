interface InfoEntryProps {
    icon: string,
    info: string,
    alt: string
}

export const InfoEntry = ({icon, info, alt}: InfoEntryProps) => {
  return (
    <div>
      <img src={icon} alt={alt} /> 
      <span>{info}</span>
    </div>
  )
}
