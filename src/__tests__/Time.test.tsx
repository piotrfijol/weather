import { render } from "@testing-library/react";
import { Time } from "../components/Time";

describe("Time component", () => {
    
    it("displays time in 12-hour format", () => {
        const timestamp = new Date(0, 0, 0, 0, 12)
        const wrapper = render(<Time format={12} is={"sunset"} at={timestamp.getTime()}/>)

        expect(wrapper.getByText('12:12 AM')).toBeInTheDocument();

        timestamp.setHours(11);
        wrapper.rerender(<Time format={12} is={"sunrise"} at={timestamp.getTime()}/>)

        expect(wrapper.getByText('11:12 AM')).toBeInTheDocument();
    });

    it("displays time in 24-hour format", () => {
        const timestamp = new Date(0, 0, 0, 17, 35)
        const wrapper = render(<Time format={24} is={"sunrise"} at={timestamp.getTime()}/>)

        expect(wrapper.getByText('17:35')).toBeInTheDocument();
        
        timestamp.setHours(11);
        wrapper.rerender(<Time format={24} is={"sunrise"} at={timestamp.getTime()}/>)

        expect(wrapper.getByText('11:35')).toBeInTheDocument();
    });
});