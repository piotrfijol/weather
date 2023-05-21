import { InfoEntry } from "../InfoEntry";
import { Time } from "../Time";
import { Temperature } from "../Temperature";
import HumidityIcon from "@assets/humidity.svg";
import BarometerIcon from "@assets/barometer.svg";
import "./CurrentDayWeather.scss";

export const CurrentDayWeather = () => {

    return (
        <section className="weather-main">
            <h2 className="weather-main__city"><span className="country-code">[PL]</span> Kielce</h2>
            <div className="weather-main__timers">
                <Time is="sunrise" at={100000000} format={12}/>
                <Time is="sunset" at={1} format={12}/>
            </div>
            <div className="container">
                <div className="weather-main__illustration">
                    <img src="http://openweathermap.org/img/wn/04d@4x.png" alt="" />
                </div>
                <div className="weather-main__info">
                    <Temperature temp={24} />
                    <InfoEntry icon={HumidityIcon} 
                        info={"42%"} alt="water drop with the percentage sign on it" />
                    <InfoEntry icon={BarometerIcon} info={"1024hPa"} alt="barometer"/>
                </div>
            </div>
        </section>
    )
}
