import { InfoEntry } from "../InfoEntry";
import { Time } from "../Time";
import { Temperature } from "../Temperature";
import HumidityIcon from "@assets/humidity.svg";
import BarometerIcon from "@assets/barometer.svg";
import WindIcon from "@assets/wind.svg";
import "./CurrentDayWeather.scss";

export const CurrentDayWeather = () => {

    return (
        <section className="weather-main">
            <div className="wrapper">
                <div className="weather-main__general">
                    <h2 className="weather-main__city"><span className="country-code">[PL]</span> Kielce</h2>
                    <div className="weather-main__timers">
                        <Time is="sunrise" at={100000000} format={24}/>
                        <Time is="sunset" at={1} format={24}/>
                    </div>
                    <div className="container">
                        <div className="weather-main__illustration">
                            <img src="http://openweathermap.org/img/wn/04d@4x.png" alt="" />
                        </div>
                        <div className="weather-main__info">
                            <Temperature temp={16} className="weather-main__temperature"/>
                            <div className="container">
                                <InfoEntry icon={HumidityIcon} 
                                    info={"42%"} alt="water drop with the percentage sign on it" />
                                <InfoEntry icon={BarometerIcon} info={"1024hPa"} alt="barometer"/>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="wind">
                    <div className="wind__image">
                    <img src={WindIcon} alt="" />
                    </div>
                    <div className="wind__data">
                        <InfoEntry 
                            icon={<img src={HumidityIcon} style={{transform: `rotate(${10}deg)`}}/>} 
                            alt="direction" 
                            info={"North West"}
                        />
                        <InfoEntry icon={HumidityIcon} alt="speed" info={"52 km/h"}/>
                    </div>
                </section>
            </div>
        </section>
    )
}
