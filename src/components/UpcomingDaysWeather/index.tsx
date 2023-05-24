import { Temperature } from "../Temperature";
import "./UpcomingDaysWeather.scss";

export const UpcomingDaysWeather = () => {
  return (
    <section className="upcoming-days">
      <h2>5-day forecast</h2>
      <table style={{width: "100%", textAlign: "left"}}>
        <thead>
          <tr><th>day</th><th>short description</th><th>temperature</th></tr>
        </thead>
        <tbody>
          <tr className="upcoming-days__row">
            <td className="upcoming-days__date">21.05</td>
            <td className="upcoming-days__image"><img src="https://openweathermap.org/img/wn/10d@2x.png" alt="rainy" /></td>
            <td className="upcoming-days__temperature"><Temperature temp={13} /></td>
          </tr>
          <tr className="upcoming-days__row">
            <td className="upcoming-days__date">22.05</td>
            <td className="upcoming-days__image"><img src="https://openweathermap.org/img/wn/02d@2x.png" alt="cloudy" /></td>
            <td className="upcoming-days__temperature"><Temperature temp={22} /></td>
          </tr>
          <tr className="upcoming-days__row">
            <td className="upcoming-days__date">23.05</td>
            <td className="upcoming-days__image"><img src="https://openweathermap.org/img/wn/04d@2x.png" alt="cloudy" /></td>
            <td className="upcoming-days__temperature"><Temperature temp={21} /></td>
          </tr>
          <tr className="upcoming-days__row">
            <td className="upcoming-days__date">24.05</td>
            <td className="upcoming-days__image"><img src="https://openweathermap.org/img/wn/03d@2x.png" alt="cloudy" /></td>
            <td className="upcoming-days__temperature"><Temperature temp={11} /></td>
          </tr>
          <tr className="upcoming-days__row">
            <td className="upcoming-days__date">25.05</td>
            <td className="upcoming-days__image"><img src="https://openweathermap.org/img/wn/01d@2x.png" alt="sunny" /></td>
            <td className="upcoming-days__temperature"><Temperature temp={22} /></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
