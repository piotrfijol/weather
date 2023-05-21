
function toFahrenheit(celsius: number) {
    return celsius * 9/5 + 32;
  }
  
  function toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5/9;
  }

export {
    toFahrenheit,
    toCelsius
}