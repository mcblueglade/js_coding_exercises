const {
    sumDigits,
    createRange,
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

describe("createRange", () => {
    test("if start and/or numbers are not passed then an error is thrown", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");

        //Boolean as 1st parameter
        expect(() => {
            createRange(true);
        }).toThrow("end is required");

        //Boolean as 2nd parameter
        expect(() => {
            createRange(22, true);
        }).toThrow("end number must be passed");

        //Missing 2nd parameter
        expect(() => {
            createRange(45);
        }).toThrow("end is required");

        //Wrong type of 1st parameter
        expect(() => {
            createRange(true, 22);
        }).toThrow("start number must be passed");
    });

    test("start cannot be greater then end value", () => {
        expect(() => {
            createRange(345, 3, 0);
        }).toThrow("start cannot be greater than end value");
    });

    test("step cannot be less than zero", () => {
        expect(() => {
            createRange(34, 346, -1);
        }).toThrow("step cannot be less than zero");
    });

    test("returns a stepped array with last item in array as the end parameter value", () => {
        expect(createRange(9, 18, 3)).toEqual([9, 12, 15, 18]);
        expect(createRange(100, 220, 20)).toEqual([100, 120, 140, 160, 180, 200, 220]);
        expect(createRange(17, 61, 7)).toEqual([17, 24, 31, 38, 45, 52, 59]);
        expect(createRange(1, 1, 1)).toEqual([1]);;
    });

    test("returns a stepped array with last item in array less than the end parameter value", () => {
        expect(createRange(9, 18, 2)).toEqual([9, 11, 13, 15, 17]);
        expect(createRange(1, 18, 2)).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17]);
        expect(createRange(9, 52, 11)).toEqual([9, 20, 31, 42]);
    });

    test("returns a stepped array with missing end step parameter", () => {
        expect(createRange(7, 16)).toEqual([7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        expect(createRange(768, 773)).toEqual([768, 769, 770, 771, 772, 773]);
        expect(createRange(1, 2)).toEqual([1, 2]);
    });

    test("returns a stepped array starting from zero", () => {
        expect(createRange(0, 26, 5)).toEqual([0, 5, 10, 15, 20, 25]);
        expect(createRange(0, 11)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    test("returns a range where the step value is zero", () => {
        expect(createRange(0, 6, 0)).toEqual([0, 1, 2, 3, 4, 5, 6]);
        expect(createRange(1, 3, 0)).toEqual([1, 2, 3]);
        expect(createRange(1, 1, 0)).toEqual([1]);
    });

    test("returns a stepped array with negative start and end values", () => {
        expect(createRange(-3450, -3445, 1)).toEqual([-3450, -3449, -3448, -3447, -3446, -3445]);
        expect(createRange(-25, -5, 5)).toEqual([-25, -20, -15, -10, -5]);
        expect(createRange(-25, -12, 3)).toEqual([-25, -22, -19, -16, -13]);
    });
});

