import SunsetIcon from "@assets/moon.svg";
import SunriseIcon from "@assets/sun.svg";
import "./Time.scss";

type TimeFormat = 12 | 24;

interface TimeProps {
    is: "sunrise" | "sunset",
    at: number,
    format: TimeFormat
};

export const Time = ({is, at, format}: TimeProps) => {

  
  const formatTime = () => {
    let d = new Date(at);
    return d.toLocaleString("en-US", {minute: "numeric", hour: "numeric", hour12: (format === 12)})
  }; 
  
  let time = formatTime();
  
  return (
        <div className="time">
          {
            is === "sunrise" 
              ? <img className="time__icon" src={SunriseIcon} alt="sunrise" />
              : is === "sunset" 
                ? <img className="time__icon" src={SunsetIcon} alt="sunset" />
                : null
          }
          <time dateTime={time} className="time__main">{time}</time>
        </div>
      );
}
