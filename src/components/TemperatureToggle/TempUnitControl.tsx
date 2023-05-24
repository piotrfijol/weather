import { TemperatureUnits } from "../../types/temperature";

interface TempUnitControlProps {
    unit: TemperatureUnits,
    symbol: string,
    defaultUnit?: TemperatureUnits,
    checked: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  
  export const TempUnitControl = ({unit, symbol, checked, onChange}: TempUnitControlProps) => {
    return (
      <>
        <label aria-label={unit} htmlFor={unit} className={checked ? "checked" : ""}>°{symbol}
          <input 
          type="radio" 
          name="temperature" 
          id={unit}
          data-unit={unit} 
          checked={checked}
          onChange={onChange}
          />
        </label>
      </>
    )
  }
  