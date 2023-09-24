import { calculate } from "../../index";

describe("Multiplication testing", () => {
    test('Two positives', () => {
        expect(calculate('*',2,4)).toBe(8);
    });
    
    test('Two negatives', () => {
        expect(calculate('*',-2,-4)).toBe(8);
    });

    test('greate no. Negative less positive', () => {
        expect(calculate('*',2,-4)).toBe(-8);
    });

    test('greate no. positive less negative', () => {
        expect(calculate('*',-2,4)).toBe(-8);
    });

    test('Multiplication  by 0', () => {
        expect(calculate('*',0,4)).toBe(0);
    });
   
});