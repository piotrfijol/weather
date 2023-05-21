import SunsetIcon from "@assets/moon.svg";
import SunriseIcon from "@assets/sun.svg";
import "./Time.scss";

type TimeFormat = 12 | 24;

interface TimeProps {
    is: "sunrise" | "sunset",
    at: EpochTimeStamp,
    format: TimeFormat
};

export const Time = ({is, at, format}: TimeProps) => {

  const formatTime = () => {
    let d = new Date(at);
    return d.toLocaleString("en-US", {minute: "numeric", hour: "numeric", hour12: (format === 12)})
  }; 

    return (
        <div className="time">
          <img className="time__icon" src={is === "sunrise" ? SunriseIcon : is === "sunset" ? SunsetIcon : ""} />
          <span className="time__main">{formatTime()}</span>
        </div>
      );
}
