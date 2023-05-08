import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "../components/SearchInput";
import { vi } from "vitest";
import { act } from "react-dom/test-utils";

describe("Search input", () => {
    it("render component", () => {
        render(<SearchInput onChange={() => {}} value={""} onLocation={() => {}} />)
        expect(screen.getByLabelText("Enter the name of the city")).toBeInTheDocument();
    });

    it("uses the event handler", () => {
        const mock = vi.fn(() => {});
        const wrapper = render(<SearchInput onChange={mock} value={""} onLocation={() => {}} />)

        const input = wrapper.getByRole("searchbox");
        fireEvent.input(input, { target: {value: "hello"}});

        expect(mock).toHaveBeenCalled();
    });

    it("depends on the react's state", () => {
        let state = "";
        const mock = () => { state = "set" };
        const wrapper = render(<SearchInput onChange={mock} value={state} onLocation={() => {}} />)

        const input = wrapper.getByRole("searchbox");
        act(() => {
            fireEvent.input(input, { target: {value: "hello"}});
            wrapper.rerender(<SearchInput onChange={mock} value={state} onLocation={() => {}}/>);
        })
        
        expect(state).toBe("set");
        expect(input.getAttribute("value")).toBe(state);

    });

    it("makes a call to Geolocation api", () => {
        let longitude = 0, 
            latitude  = 0;

        let gPosition : GeolocationPosition = {
            coords: {
                accuracy: 0,
                altitude: 0,
                heading: 0,
                speed: 0,
                altitudeAccuracy: 0,
                longitude: 1,
                latitude: 2
            },
            timestamp: 0
        };

        (global as any).navigator = {
            geolocation: {
                getCurrentPosition: vi.fn().mockImplementation((callback) => {
                    callback(gPosition);
                })
            }
        }
        
        const mock = vi.fn((position: GeolocationPosition) => {
            const {longitude: long, latitude: lat} = position.coords;
            longitude = long;
            latitude  = lat; 
        });

        const wrapper = render(<SearchInput onChange={() => {}} value="" onLocation={mock}/>)
        const navButton = wrapper.getByRole("button");

        fireEvent.click(navButton);

        expect(mock).toBeCalled();
        expect(longitude).toBe(1);
        expect(latitude).toBe(2);

    });
});