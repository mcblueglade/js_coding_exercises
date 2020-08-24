const {
    sumDigits
    //createRange,
    //getScreentimeAlertList,
    //hexToRGB,
    //findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("if number is not passed then an error is thrown", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");

        //Boolean parameter
        expect(() => {
            sumDigits(true);
        }).toThrow("a number must be passed");

        //Empty string parameter
        expect(() => {
            sumDigits("");
        }).toThrow("a number must be passed");

        //String as a number parameter
        expect(() => {
            sumDigits("45");
        }).toThrow("a number must be passed");

        //String as a alphanumeric parameter
        expect(() => {
            sumDigits("4AS5FRV");
        }).toThrow("a number must be passed");
    });

    test("if number is passed and is not a float", () => {
        //Float with decimal places
        expect(() => {
            sumDigits(44.67);
        }).toThrow("a number must be passed");
    });

    test("Sum the digits of a non-zero number", () => {
        expect(sumDigits(3245)).toBe(14);
        expect(sumDigits(100)).toBe(1);
        expect(sumDigits(7842358)).toBe(37);
    });

    test("Sum the digits of a zero number", () => {
        expect(sumDigits(0)).toBe(0);
    });
});
