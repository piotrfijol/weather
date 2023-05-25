import { degToDirection } from "../utils/helper";


describe("degToDirection function", () => {
    it("returns the cardinal direction", () => {
        expect(degToDirection(0)).toBe("North");
        expect(degToDirection(91)).toBe("East");
        expect(degToDirection(165)).toBe("South");
        expect(degToDirection(70)).toBe("East");
        expect(degToDirection(260)).toBe("West");
        expect(degToDirection(350)).toBe("North");
        expect(degToDirection(112)).toBe("East");
        expect(degToDirection(21.5)).toBe("North");
    });

    it("returns the intercardinal directions", () => {
        expect(degToDirection(44)).toBe("North-East");
        expect(degToDirection(45)).toBe("North-East");
        expect(degToDirection(65)).toBe("North-East");
        expect(degToDirection(123)).toBe("South-East");
        expect(degToDirection(230)).toBe("South-West");
    });
});