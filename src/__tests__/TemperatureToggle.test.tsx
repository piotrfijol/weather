import { render } from "@testing-library/react";
import { TemperatureToggle } from "../components/TemperatureToggle";


describe("TemperatureToggle component", () => {
    it("renders", () => {
        const wrapper = render(<TemperatureToggle selectedUnit={"celsius"} onToggle={() => {}}/>);

        expect(wrapper.getAllByRole("radio").length).toEqual(2);
    });

    it("defaults to celsius", () => {
        const wrapper = render(<TemperatureToggle onToggle={() => {}}/>);
        const selectedUnit = wrapper.getAllByRole("radio").find((el) => el.getAttribute("data-unit") === "celsius");

        expect(selectedUnit).toBeChecked();
    });

    it("allows to change the checked unit to fahrenheit", () => {
        const wrapper = render(<TemperatureToggle selectedUnit={"fahrenheit"} onToggle={() => {}} />);
        const selectedUnit = wrapper.getAllByRole("radio").find((el) => el.getAttribute("data-unit") === "fahrenheit");
        
        expect(selectedUnit).toBeChecked();
    });

});