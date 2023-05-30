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

  function convertTemperature() {
    if(defaultUnit === unit) {
      return Math.round(temp);
    } else if(unit === "fahrenheit") {
      return Math.round(toFahrenheit(temp)); 
    }
  }
    
  return (
    <div className={`temperature ${className}`}>
      <span className="temperature__value">{convertTemperature()}<sup className="temperature__symbol">&deg;{symbol}</sup></span>
    </div>
  )
}
