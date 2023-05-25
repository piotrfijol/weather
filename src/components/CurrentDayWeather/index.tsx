import { InfoEntry } from "../InfoEntry";
import { Time } from "../Time";
import { Temperature } from "../Temperature";
import { useQuery } from "@tanstack/react-query";
import { SearchLocation } from "../../types/location";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
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
    const {isLoading, status, error, data} = useQuery({queryKey: ['current-day', location], queryFn: () => fetchWeather(location, "weather")})

    if(status === "error") {
        if(error instanceof Error) 
            return <div style={{textAlign: "center"}}>{(error as Error).message}</div>
    }

    return (
        <section className="today">
            <div className="wrapper">
                <div className="today__location">
                {isLoading ? <Skeleton containerClassName="today__country"/>: <img src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${data.sys.country}.svg`} className="today__country" alt="PL flag" />}
                {isLoading ? <Skeleton width={250} containerClassName="today__city"/>: <h2 className="today__city">{truncate(data.name, 18)}</h2>}
                </div>
                <div className="today__timers">
                    {isLoading ? <Skeleton width={80} height={20}/>: <Time is="sunrise" at={(data.sys.sunrise + data.timezone) * 1000} format={24}/>}
                    {isLoading ? <Skeleton width={80} height={20}/> : <Time is="sunset" at={(data.sys.sunset + data.timezone) * 1000} format={24}/>}
                </div>
            </div>

            <div className="today__general">
                <div className="today__main">
                    <div className="today__illustration">
                        {isLoading?<Skeleton width={150} height={150}/> :<img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt={data.weather[0].description} />}
                    </div>
                    <div className="today__info-container">
                        {isLoading ? <Skeleton width={120} height={80} containerClassName="today__temperature"/> :<Temperature temp={data.main.temp} className="today__temperature"/>}
                            <div className="today__info">
                                {isLoading ? <Skeleton width={80} height={20}/> :<InfoEntry icon={HumidityIcon} 
                                    info={data.main.humidity + "%"} alt="humidity" />}
                                {isLoading ? <Skeleton width={80} height={20}/> : <InfoEntry icon={BarometerIcon} info={data.main.pressure + "hPa"} alt="atmospheric pressure"/>}
                            </div>
                    </div>
                </div>
                {isLoading?<Skeleton containerClassName="flex-1" height={90} width={250}/> :(<>
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
                    </>)}
            </div>
        </section>
    )
}
