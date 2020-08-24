const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
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

describe("getScreentimeAlertList", () => {
    test("if users and date have been passed", () => {
        const userData = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    { date: "2019-06-15", usage: { mapMyRun: 46, whatsApp: 20, facebook: 73, safari: 11 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    { date: "2019-06-15", usage: { mapMyRun: 50, whatsApp: 30, facebook: 60, safari: 31 } },
                ]
            }]
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("users is required");

        //Boolean as 1st parameter
        expect(() => {
            getScreentimeAlertList(userData);
        }).toThrow("date is required");
    });

    test("returns array of users whose screen time exceeds 100 minutes", () => {
        const userData = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    { date: "2019-06-15", usage: { mapMyRun: 46, whatsApp: 20, facebook: 73, safari: 11 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 0 } },
                    { date: "2019-06-15", usage: { mapMyRun: 50, whatsApp: 30, facebook: 60, safari: 31 } },
                ]
            },
            {
                username: "james_c_1985",
                name: "James Combes",
                screenTime: [
                    { date: "2019-04-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-05-04", usage: { mapMyRun: 78, whatsApp: 22, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    { date: "2019-06-15", usage: { mapMyRun: 80, whatsApp: 33, facebook: 65, safari: 3 } },
                ]
            },
            {
                username: "donald_t_1962",
                name: "Donald Trump",
                screenTime: [
                    { date: "2019-04-11", usage: { twitter: 100, whatsApp: 0, facebook: 0, safari: 0 } },
                    { date: "2019-05-04", usage: { twitter: 3, whatsApp: 56, facebook: 35, safari: 1 } },
                    { date: "2019-06-14", usage: { mapMyRun: 101, whatsApp: 0, facebook: 0, safari: 0 } },
                    { date: "2019-06-15", usage: { mapMyRun: 30, whatsApp: 30, facebook: 30, safari: 31 } },
                ]
            },
        ];

        expect(getScreentimeAlertList(userData, "2019-05-04")).toEqual(["beth_1234", "james_c_1985"]);
        expect(getScreentimeAlertList(userData, "2019-06-15")).toEqual(["beth_1234", "sam_j_1989", "james_c_1985", "donald_t_1962"]);
        expect(getScreentimeAlertList(userData, "2019-06-14")).toEqual(["donald_t_1962"]);
    });

    test("returns array of users whose screen time is exactly 101 minutes", () => {
        const userData = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
            {
                username: "james_c_1985",
                name: "James Combes",
                screenTime: [
                    { date: "2019-04-11", usage: { mapMyRun: 30, whatsApp: 50, facebook: 20, safari: 1 } },
                    { date: "2019-05-04", usage: { mapMyRun: 78, whatsApp: 22, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
            {
                username: "donald_t_1962",
                name: "Donald Trump",
                screenTime: [ //On 2019-04-11 Donald used exactly 100 mins of social media so was excluded
                    { date: "2019-04-11", usage: { twitter: 80, whatsApp: 15, facebook: 3, safari: 2 } },
                    { date: "2019-05-04", usage: { twitter: 1300, whatsApp: 56, facebook: 35, safari: 1 } },
                    { date: "2019-06-14", usage: { twitter: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ];

        expect(getScreentimeAlertList(userData, "2019-04-11")).toEqual(["james_c_1985"]);
    });
});

describe("hexToRGB", () => {
    test("if hexStr has been passed", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required");

        expect(() => {
            hexToRGB("");
        }).toThrow("hexStr is required");

        expect(() => {
            hexToRGB("@998822");
        }).toThrow("A valid hexStr is required");

        expect(() => {
            hexToRGB("#99JHG2");
        }).toThrow("A valid hexStr is required");

        expect(() => {
            hexToRGB("#99884");
        }).toThrow("A valid hexStr is required");

        expect(() => {
            hexToRGB("#FF399884");
        }).toThrow("A valid hexStr is required");
    });

    test("returns the convertd rgb value from hexidecimal", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
        expect(hexToRGB("#D8BFD9")).toBe("rgb(216,191,217)");
    });
});



