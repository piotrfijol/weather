import { useState } from "react";
import { CurrentDayWeather } from './components/CurrentDayWeather';
import { Searchbar } from './components/Searchbar';
import { TemperatureToggle } from './components/TemperatureToggle';
import { UpcomingDaysWeather } from "./components/UpcomingDaysWeather";
import { TemperatureSymbols, TemperatureUnits, TemperatureUnitsInfo } from "./types/temperature";
import { TemperatureProvider, defaultTempUnitsInfo } from "./react-context/TemperatureContext";
import './App.css';

function App() {
  const [temperatureUnits, setTemperatureUnits] = useState<TemperatureUnitsInfo>(defaultTempUnitsInfo);

  const handleTempToggle = (unit: TemperatureUnits) => {
    setTemperatureUnits((temperatureUnits) => {
      let symbol: TemperatureSymbols;
      if(unit === "fahrenheit")
        symbol = "F";
      else 
        symbol = defaultTempUnitsInfo.symbol

      return {...temperatureUnits, unit, symbol}
    })
  }

  return (
    <div className="container">
        <Searchbar />
        <TemperatureToggle selectedUnit={temperatureUnits.unit} onToggle={handleTempToggle}/>
        <TemperatureProvider value={temperatureUnits}>
          <CurrentDayWeather />
          <UpcomingDaysWeather />
        </TemperatureProvider>
    </div>
  )
}

export default App
