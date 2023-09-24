import { calculate } from "../../index";

describe("Division testing", () => {
    test('Two positives', () => {
        expect(calculate('/',4,2)).toBe(2);
    });
    
    test('Two negatives', () => {
        expect(calculate('/',-4,-2)).toBe(2);
    });

    test('greate no. Negative ,less positive', () => {
        expect(calculate('/',4,-2)).toBe(-2);
    });

    test('greate no. positive, less negative', () => {
        expect(calculate('/',-4,2)).toBe(-2);
    });

    test('Division  by 0', () => {
        expect(calculate('/',4,0)).toBe("error division by zero");
    });
    test('dividing 0 by  number', () => {
        expect(calculate('/',0,4)).toBe(0);
    });
   
});
 
 
