import { render } from "@testing-library/react";
import { Temperature } from "../components/Temperature";
import { TemperatureProvider } from "../react-context/TemperatureContext";

describe("Temperature component", () => {
    
    it("converts celsius to fahrenheit", () => {
        let temperature = 16;
        const wrapper = render(
            <TemperatureProvider value={{unit: "fahrenheit", defaultUnit: "celsius", symbol: "F"}}>
                <Temperature temp={temperature}/>;
            </TemperatureProvider>);

        expect(wrapper.getByText("60.8°F")).toBeInTheDocument();
        wrapper.rerender(<Temperature temp={temperature} />)
    });

});