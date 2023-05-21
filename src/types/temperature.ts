export type TemperatureUnits = "celsius" | "fahrenheit";
export type TemperatureSymbols = "C" | "F";

export interface TemperatureUnitsInfo {
    unit: TemperatureUnits,
    defaultUnit: TemperatureUnits,
    symbol: TemperatureSymbols
}