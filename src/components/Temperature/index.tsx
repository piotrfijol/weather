import { useState, useEffect } from "react";
import { useTempUnit } from "../../custom-hooks/useTempUnit";
import { toFahrenheit } from "../../utils/tempConverters";
import "./Temperature.scss";

interface TemperatureProps {
    temp: number
}

export const Temperature = ({temp = 0}: TemperatureProps) => {
  const {unit, defaultUnit, symbol} = useTempUnit();
  const [temperature, setTemperature] = useState<number>(0);


    useEffect(() => {
      if(defaultUnit === unit) {
        setTemperature(temp);
      } else if(unit === "fahrenheit") {
        setTemperature(toFahrenheit(temp)); 
      }

    }, [unit])
    

  return (
    <div className="temperature">
      <span className="temperature__value">{temperature}°{symbol}</span>
    </div>
  )
}
