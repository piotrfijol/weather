import { TemperatureUnits } from "../../types/temperature";
import { TempUnitControl } from "./TempUnitControl";
import "./TemperatureToggle.scss";

interface TemperatureToggleProps {
    selectedUnit: TemperatureUnits,
    onToggle: (unit: TemperatureUnits) => void
}

export const TemperatureToggle = ({selectedUnit, onToggle}: TemperatureToggleProps) => {

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement> ) => {
    const target = ev.currentTarget;
    if(target.dataset.unit)
      onToggle(target.dataset.unit as TemperatureUnits)
  }

  return (
    <div className="temperature-toggle">
      <form>
        <fieldset>
          <legend>Select your temperature unit</legend>
          <TempUnitControl unit="celsius" symbol="C" checked={selectedUnit === "celsius"} onChange={handleChange}/>
          <div className="temperature-toggle__delimiter" />
          <TempUnitControl unit="fahrenheit" symbol="F" checked={selectedUnit === "fahrenheit"} onChange={handleChange}/>
        </fieldset>
      </form>
    </div>
  )
}
