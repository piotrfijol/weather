import { InfoEntry } from "../InfoEntry";
import { Time } from "../Time";
import { Temperature } from "../Temperature";
import { useQuery } from "@tanstack/react-query";
import HumidityIcon from "@assets/humidity.svg";
import BarometerIcon from "@assets/barometer.svg";
import SpeedometerIcon from "@assets/Speedometer.svg";
import DirectionIcon from "@assets/direction.svg";
import WindIcon from "@assets/wind.svg";
import "./CurrentDayWeather.scss";

const fetchTodayWeather = async () => {
    const response = await fetch("https://weatherapp-server.melaryk.repl.co/api/weather?q=Kielce");
    if(!response.ok) {
        throw new Error("There was a network problem when requesting weather data.");
    }

    return await response.json();
};

export const CurrentDayWeather = () => {
    const {isLoading, isError, error, data} = useQuery({queryKey: ['current-day'], queryFn: fetchTodayWeather})

    if(isLoading) {
        return <span>Loading</span>
    }

    if(isError && error) {
        <span>{error.message}</span>
    }

    return (
        <section className="today wrapper">
            <div className="wrapper">
                <div className="today__general">
                    <div className="today__location">
                        <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg" className="today__country" alt="PL flag" /> 
                        <h2 className="today__city">Kielce</h2>
                    </div>
                    <div className="today__timers">
                        <Time is="sunrise" at={100000000} format={24}/>
                        <Time is="sunset" at={1} format={24}/>
                    </div>
                    <div className="today__main">
                        <div className="today__illustration">
                            <img src="https://openweathermap.org/img/wn/10d@4x.png" alt="" />
                        </div>
                        <div className="today__info-container">
                            <Temperature temp={16} className="today__temperature"/>
                            <div className="today__info">
                                <InfoEntry icon={HumidityIcon} 
                                    info={"42%"} alt="humidity" />
                                <InfoEntry icon={BarometerIcon} info={"1024hPa"} alt="atmospheric pressure"/>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="wind">
                    <div className="wind__image">
                    <img src={WindIcon} alt="wind" />
                    </div>
                    <div className="wind__data">
                        <InfoEntry 
                            icon={<img src={DirectionIcon} alt="direction" style={{transform: `rotate(${44}deg)`}}/>} 
                            alt="direction" 
                            info={"North West"}
                        />
                        <InfoEntry icon={SpeedometerIcon} alt="speed" info={"52 km/h"}/>
                    </div>
                </section>
            </div>
        </section>
    )
}
