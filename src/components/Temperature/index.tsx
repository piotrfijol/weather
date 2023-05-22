import { useState, useEffect } from "react";
import { useTempUnit } from "../../custom-hooks/useTempUnit";
import { toFahrenheit } from "../../utils/tempConverters";
import "./Temperature.scss";

interface TemperatureProps {
    temp: number,
    className?: string
}

export const Temperature = ({temp = 0, className=""}: TemperatureProps) => {
  const {unit, defaultUnit, symbol} = useTempUnit();
  const [temperature, setTemperature] = useState<number>(0);


    useEffect(() => {
      if(defaultUnit === unit) {
        setTemperature(temp);
      } else if(unit === "fahrenheit") {
        setTemperature(Math.round(toFahrenheit(temp))); 
      }

    }, [unit])
    

  return (
    <div className={`temperature ${className}`}>
      <span className="temperature__value">{temperature}<sup className="temperature__symbol">°{symbol}</sup></span>
    </div>
  )
}
