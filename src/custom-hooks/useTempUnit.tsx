import { useContext } from "react"
import { TemperatureContext } from "../react-context/TemperatureContext"


export const useTempUnit = () => {
  return useContext(TemperatureContext);
}
