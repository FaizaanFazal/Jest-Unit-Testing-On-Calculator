import { calculate } from "../../index";



describe("Addition testing", () => {
    test('Two positives', () => {
        expect(calculate('+',2,3)).toBe(5);
    });
    
    test('Two negatives', () => {
        expect(calculate('+',-2,-3)).toBe(-5);
    });

    test('greate no. Negative less positive', () => {
        expect(calculate('+',2,-3)).toBe(-1);
    });

    test('greate no. positive less negative', () => {
        expect(calculate('+',-2,3)).toBe(1);
    });
});