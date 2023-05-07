import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "../components/SearchInput";
import { vi } from "vitest";
import { act } from "react-dom/test-utils";

describe("Search input", () => {
    it("render component", () => {
        render(<SearchInput onChange={() => {}} value={""} />)
        expect(screen.getByLabelText("Enter the name of the city")).toBeInTheDocument();
    });

    it("uses the event handler", () => {
        const mock = vi.fn(() => {});
        const wrapper = render(<SearchInput onChange={mock} value={""} />)

        const input = wrapper.getByRole("searchbox");
        fireEvent.input(input, { target: {value: "hello"}});

        expect(mock).toHaveBeenCalled();
    });

    it("depends on the react's state", () => {
        let state = "";
        const mock = () => { state = "set" };
        const wrapper = render(<SearchInput onChange={mock} value={state} />)

        const input = wrapper.getByRole("searchbox");
        act(() => {
            fireEvent.input(input, { target: {value: "hello"}});
            wrapper.rerender(<SearchInput onChange={mock} value={state} />);
        })
        
        expect(state).toBe("set");
        expect(input.getAttribute("value")).toBe(state);

    });
});