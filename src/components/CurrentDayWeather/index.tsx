import { InfoEntry } from "../InfoEntry";
import { Time } from "../Time";
import { Temperature } from "../Temperature";
import { useQuery } from "@tanstack/react-query";
import { SearchLocation } from "../../types/location";
import HumidityIcon from "@assets/humidity.svg";
import BarometerIcon from "@assets/barometer.svg";
import SpeedometerIcon from "@assets/Speedometer.svg";
import DirectionIcon from "@assets/direction.svg";
import WindIcon from "@assets/wind.svg";
import "./CurrentDayWeather.scss";
import { degToDirection, truncate } from "../../utils/helper";
import { fetchWeather } from "../../fetch/weather";

interface CurrentDayWeatherProps {
    location: SearchLocation
}

export const CurrentDayWeather = ({ location }: CurrentDayWeatherProps) => {
    const {isLoading, isError, error, data} = useQuery({queryKey: ['current-day', location], queryFn: () => fetchWeather(location, "weather")})

    if(isLoading) {
        return <span>Loading</span>
    }

    if(isError && error) {
        <span>{error.message}</span>
    }

    return (
        <section className="today">
            <div className="wrapper">
                <div className="today__location">
                    <img src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${data.sys.country}.svg`} className="today__country" alt="PL flag" /> 
                    <h2 className="today__city">{truncate(data.name, 18)}</h2>
                </div>
                <div className="today__timers">
                    <Time is="sunrise" at={(data.sys.sunrise + data.timezone) * 1000} format={24}/>
                    <Time is="sunset" at={(data.sys.sunset + data.timezone) * 1000} format={24}/>
                </div>
            </div>

            <div className="today__general">
                <div className="today__main">
                    <div className="today__illustration">
                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt={data.weather[0].description} />
                    </div>
                    <div className="today__info-container">
                        <Temperature temp={data.main.temp} className="today__temperature"/>
                        <div className="today__info">
                            <InfoEntry icon={HumidityIcon} 
                                info={data.main.humidity + "%"} alt="humidity" />
                            <InfoEntry icon={BarometerIcon} info={data.main.pressure + "hPa"} alt="atmospheric pressure"/>
                        </div>
                    </div>
                </div>
                <section className="wind">
                    <div className="wind__image">
                    <img src={WindIcon} alt="wind" />
                    </div>
                    <div className="wind__data">
                        <InfoEntry 
                            icon={<img src={DirectionIcon} alt="direction" style={{transform: `rotate(${data.wind.deg}deg)`}}/>} 
                            alt="direction" 
                            info={degToDirection(data.wind.deg)}
                        />
                        <InfoEntry icon={SpeedometerIcon} alt="speed" info={(data.wind.speed * (3600/1000)).toFixed(2) + " km/h"}/>
                    </div>
                </section>
            </div>
        </section>
    )
}
