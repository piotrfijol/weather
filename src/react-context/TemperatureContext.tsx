import { ReactNode, createContext } from 'react'
import { TemperatureUnitsInfo } from '../types/temperature';

interface TemperatureProviderProps {
    children: ReactNode,
    value: TemperatureUnitsInfo
} 

export const defaultTempUnitsInfo: TemperatureUnitsInfo = { 
  defaultUnit: "celsius", 
  unit: "celsius", 
  symbol: "C" 
}; 
export const TemperatureContext = createContext<TemperatureUnitsInfo>(defaultTempUnitsInfo);

export const TemperatureProvider = ({children, value}: TemperatureProviderProps) => {

  return (
    <TemperatureContext.Provider value={value}>
        {children}
    </TemperatureContext.Provider>
  )
}
