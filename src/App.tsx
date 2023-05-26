import { useState } from "react";
import { CurrentDayWeather } from './components/CurrentDayWeather';
import { Searchbar } from './components/Searchbar';
import { TemperatureToggle } from './components/TemperatureToggle';
import { UpcomingDaysWeather } from "./components/UpcomingDaysWeather";
import { TemperatureSymbols, TemperatureUnits, TemperatureUnitsInfo } from "./types/temperature";
import { SearchLocation } from "./types/location";
import { TemperatureProvider, defaultTempUnitsInfo } from "./react-context/TemperatureContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import './App.css';
import { SkeletonTheme } from "react-loading-skeleton";

const queryClient = new QueryClient({defaultOptions: {queries: {retry: 1, refetchOnWindowFocus: false}}})

function App() {
  const [temperatureUnits, setTemperatureUnits] = useState<TemperatureUnitsInfo>(defaultTempUnitsInfo);
  const [location, setLocation] = useState<SearchLocation>("Warsaw");

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
      <QueryClientProvider client={queryClient}>
        <Searchbar onLocationChange={(location) => setLocation(location)}/>
        <TemperatureToggle selectedUnit={temperatureUnits.unit} onToggle={handleTempToggle}/>
        <SkeletonTheme baseColor="#0f0928" highlightColor="#010040">
            <TemperatureProvider value={temperatureUnits}>
              <CurrentDayWeather location={location}/>
              <UpcomingDaysWeather location={location}/>
            </TemperatureProvider>
        </SkeletonTheme>
      </QueryClientProvider>
        <footer>
          Design & Code made by <a href="https://github.com/piotrfijol">Piotr Fijoł</a><br />Powered by <a href="https://openweathermap.org/">OpenWeatherMap</a>
        </footer>
    </div>
  )
}

export default App
