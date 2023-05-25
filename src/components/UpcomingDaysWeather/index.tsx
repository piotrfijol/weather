import { Temperature } from "../Temperature";
import { useQuery } from "@tanstack/react-query";
import "./UpcomingDaysWeather.scss";
import { SearchLocation } from "../../types/location";
import { fetchWeather } from "../../fetch/weather";
import Skeleton from "react-loading-skeleton";


interface UpcomingDaysWeatherProps {
  location: SearchLocation
}

export const UpcomingDaysWeather = ({ location }: UpcomingDaysWeatherProps) => {
  const {status, isLoading, error, data} = useQuery({
    queryKey: ['upcoming-days', location],
    queryFn: () => fetchWeather(location, "upcoming-weather")
  });

  if(status === "error") {
    if(error instanceof Error) 
        return <div style={{textAlign: "center"}}>{(error as Error).message}</div>
  }


  return (
    <section className="upcoming-days">
      <h2>5-day forecast</h2>
      
      {isLoading ? <Skeleton className="upcoming-days__row" count={5} height={90}/> :(
        <table style={{width: "100%", textAlign: "left"}}>
          <thead>
            <tr><th>day</th><th>short description</th><th>temperature</th></tr>
          </thead>
            <tbody>
              {data.map((day: any) => 
                <tr className="upcoming-days__row" key={day.dt_txt}>
                  <td className="upcoming-days__date">{day.dt_txt}</td>
                  <td className="upcoming-days__image"><img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} /></td>
                  <td className="upcoming-days__temperature"><Temperature temp={day.main.temp} /></td>
                </tr>
              )}
            </tbody>
        </table>)}
    </section>
  )
}
