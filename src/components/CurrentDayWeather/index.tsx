import { InfoEntry } from "../InfoEntry";
import { Time } from "../Time";
import { Temperature } from "../Temperature";
import HumidityIcon from "@assets/humidity.svg";
import BarometerIcon from "@assets/barometer.svg";
import WindIcon from "@assets/wind.svg";
import "./CurrentDayWeather.scss";

export const CurrentDayWeather = () => {

    return (
        <section className="today wrapper">
            <div className="wrapper">
                <div className="today__general">
                    <h2 className="today__city"><span className="country-code">[PL]</span> Kielce</h2>
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
