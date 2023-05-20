import { InfoEntry } from "../InfoEntry";
import { Time } from "../Time";
import HumidityIcon from "@assets/humidity.svg";
import BarometerIcon from "@assets/barometer.svg";
import { Temperature } from "../Temperature/Temperature";
import { useState } from "react";

export const CurrentDayWeather = () => {
    const [temp, setTemp] = useState(24)

    const handleTempUnitChange = (temperature: number) => {
        setTemp(temperature);
    }

    return (
        <section>
            <h2>City</h2>
            <div className="timers">
                <Time is="sunrise" at={1} />
                <Time is="sunset" at={1} />
            </div>
            <div>
                <div className="weather-infographic/illustration">
                    <img src="" alt="" />
                </div>
                <div className="weather-info">
                    <Temperature onTemperatureToggle={handleTempUnitChange} temp={temp} />
                    <InfoEntry icon={HumidityIcon} 
                        info={"42%"} alt="water drop with the percentage sign on it" />
                    <InfoEntry icon={BarometerIcon} info={"1024hPa"} alt="barometer"/>
                </div>
            </div>
        </section>
    )
}
