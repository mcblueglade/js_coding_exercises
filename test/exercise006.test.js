const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    //isItPrime,
    //createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("returns the summation of numbers that are only multiples of 3 or 5", () => {
        expect(sumMultiples([5, 3, 7, 5, 1, 10, 14, 3])).toBe(26);
        expect(sumMultiples([6, 11, 3, 7, 5, 8, 3, 15, 22, 18])).toBe(50);
        expect(sumMultiples([4, 22, 115, 123, 65, 261, 40, 1, 13])).toBe(604);
    });

    test("returns 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([])).toBe(0);
        expect(sumMultiples([11, 17, 437, 22, 8, 31])).toBe(0);
    });

    test("returns same value if one multiple of 3 or 5 (or both) are passed", () => {
        expect(sumMultiples([3])).toBe(3);
        expect(sumMultiples([5])).toBe(5);
        expect(sumMultiples([15])).toBe(15);
        expect(sumMultiples([18])).toBe(18);
        expect(sumMultiples([20])).toBe(20);
    });

    test("if not passed an array throw an error", () => {
        //No parameters
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        //Empty Object parameter
        expect(() => {
            sumMultiples({});
        }).toThrow("an Array must be passed");

        //String parameter
        expect(() => {
            sumMultiples("bar");
        }).toThrow("an Array must be passed");

        //Boolean parameter
        expect(() => {
            sumMultiples(true);
        }).toThrow("an Array must be passed");

        //Integer parameter
        expect(() => {
            sumMultiples(64);
        }).toThrow("an Array must be passed");

        //Float parameter
        expect(() => {
            sumMultiples(24.45);
        }).toThrow("an Array must be passed");
    });
});

describe("isValidDNA", () => {
    test("if string is not passed as a parameter an error is thrown", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");

        //Boolean parameter
        expect(() => {
            isValidDNA(true);
        }).toThrow("a String must be passed");
    });

    test("returns false if string does not contain DNA characters: C, G, A or T", () => {
        expect(isValidDNA("TAGCGADTCTGGGAARCTT")).toBe(false);
        expect(isValidDNA("")).toBe(false);
        expect(isValidDNA("RHJISBNSWSSD")).toBe(false);
        expect(isValidDNA("D")).toBe(false);
        expect(isValidDNA("HH")).toBe(false);
        expect(isValidDNA("R")).toBe(false);
    });

    test("if string contains DNA characters: C, G, A or T", () => {
        expect(isValidDNA("TAGCGACTCTGGGAACCTT")).toBe(true);
        expect(isValidDNA("TAGC")).toBe(true);
        expect(isValidDNA("AG")).toBe(true);
        expect(isValidDNA("CT")).toBe(true);
        expect(isValidDNA("GTA")).toBe(true);
        expect(isValidDNA("T")).toBe(true);
        expect(isValidDNA("C")).toBe(true);
        expect(isValidDNA("G")).toBe(true);
        expect(isValidDNA("A")).toBe(true);
    });

    test("if string contains mixed case DNA characters: C, G, A or T", () => {
        expect(isValidDNA("TAGCgACTgTGGGAaCCtT")).toBe(true);
        expect(isValidDNA("TaGC")).toBe(true);
        expect(isValidDNA("ctagta")).toBe(true);
        expect(isValidDNA("Ag")).toBe(true);
        expect(isValidDNA("cT")).toBe(true);
        expect(isValidDNA("GtA")).toBe(true);
        expect(isValidDNA("t")).toBe(true);
        expect(isValidDNA("c")).toBe(true);
        expect(isValidDNA("g")).toBe(true);
        expect(isValidDNA("a")).toBe(true);
        expect(isValidDNA("ryh")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("if string is not passed as a parameter an error is thrown", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");

        //Boolean parameter
        expect(() => {
            getComplementaryDNA(true);
        }).toThrow("a String must be passed");
    });

    test("if DNA string is empty then return an empty string", () => {
        expect(getComplementaryDNA("")).toBe("");
    });

    test("if string not a valid DNA sequence then return an empty string", () => {
        expect(getComplementaryDNA("")).toBe("");
        expect(getComplementaryDNA("hjk")).toBe("");
        expect(getComplementaryDNA("LKR")).toBe("");
    });

    test("if DNA string has mixed valid and invalid sequence then return string with valid elements only", () => {
        expect(getComplementaryDNA("")).toBe("");
        expect(getComplementaryDNA("hjk")).toBe("");
        expect(getComplementaryDNA("LPE")).toBe("");
        expect(getComplementaryDNA("LKGRT")).toBe("CA");
    });


    test("string of complementary DNA elements map correctly: T <-> A, C <-> G", () => {
        expect(getComplementaryDNA("TAGC")).toBe("ATCG");
        expect(getComplementaryDNA("TGCACCTTGGAATG")).toBe("ACGTGGAACCTTAC");
        expect(getComplementaryDNA("C")).toBe("G");
        expect(getComplementaryDNA("A")).toBe("T");
        expect(getComplementaryDNA("G")).toBe("C");
        expect(getComplementaryDNA("T")).toBe("A");
        expect(getComplementaryDNA("TG")).toBe("AC");
        expect(getComplementaryDNA("TGCA")).toBe("ACGT");
        expect(getComplementaryDNA("GTA")).toBe("CAT");
    });

    test("if input string contains mixed case complementaty DNA elements map correctly: T <-> A, C <-> G", () => {
        expect(getComplementaryDNA("tgaacga")).toBe("ACTTGCT");
        expect(getComplementaryDNA("c")).toBe("G");
        expect(getComplementaryDNA("a")).toBe("T");
        expect(getComplementaryDNA("g")).toBe("C");
        expect(getComplementaryDNA("t")).toBe("A");
    });
});

describe("areWeCovered", () => {
    test("if the correct arguments have been passed", () => {
        expect(() => {
            areWeCovered();
        }).toThrow("staff is required");
        expect(() => {
            areWeCovered([]);
        }).toThrow("day is required");
    });

    test("if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tueday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });

    test("if there are staff for a minumum weekly rota setup", () => {
        const staff = [
            { name: "gary", rota: [] },
            { name: "sally", rota: ["Tuesday"] },
            { name: "tom", rota: ["Monday"] },
            { name: "jess", rota: [] },
            { name: "james", rota: ["Tuesday"] },
            { name: "mike", rota: [] },
            { name: "lisa", rota: ["Tuesday"] },
            { name: "john", rota: [] }
        ];

        expect(areWeCovered(staff, "Monday")).toBe(false);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
    });

    test("if there are staff but only 3 or less are scheduled to work for a particular day", () => {
        const staff = [
            { name: "gary", rota: ["Wednesday", "Friday"] },
            { name: "sally", rota: ["Sunday", "Friday"] },
            { name: "tom", rota: ["Wednesday", "Friday"] },
            { name: "jess", rota: ["Sunday", "Monday"] },
            { name: "james", rota: ["Wednesday", "Friday"] },
            { name: "mike", rota: ["Wednesday", "Friday", "Saturday"] }
        ];

        expect(areWeCovered(staff, "Sunday")).toBe(false);
        expect(areWeCovered(staff, "Tuesday")).toBe(false);
        expect(areWeCovered(staff, "Monday")).toBe(false);
        expect(areWeCovered(staff, "Saturday")).toBe(false);
        expect(areWeCovered(staff, "Thursday")).toBe(false);
    });

    test("returns true if there 3 or more staff scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Tuesday", "Wednesday", "Friday"] },
            { name: "sally", rota: ["Sunday", "Thursday"] },
            { name: "tom", rota: ["Tuesday", "Wednesday", "Friday"] },
            { name: "jess", rota: ["Sunday", "Monday"] },
            { name: "james", rota: ["Wednesday", "Friday"] },
            { name: "mike", rota: ["Thursday", "Friday", "Saturday"] }
        ];

        expect(areWeCovered(staff, "Wednesday")).toBe(true);
        expect(areWeCovered(staff, "Friday")).toBe(true);
    });

    test("if there are staff for each day of the week", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
            { name: "sally", rota: ["Sunday", "Thursday"] },
            { name: "tom", rota: ["Tuesday", "Wednesday", "Friday"] },
            { name: "jess", rota: ["Sunday", "Monday", "Saturday"] },
            { name: "james", rota: ["Wednesday", "Friday"] },
            { name: "mike", rota: ["Tuesday", "Thursday", "Friday", "Saturday"] },
            { name: "lisa", rota: ["Monday"] },
            { name: "john", rota: [] }
        ];

        expect(areWeCovered(staff, "Sunday")).toBe(true);
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
        expect(areWeCovered(staff, "Thursday")).toBe(true);
        expect(areWeCovered(staff, "Friday")).toBe(true);
        expect(areWeCovered(staff, "Saturday")).toBe(true);
    });

    test("if the rota and parameters are case insensitive", () => {
        const staff = [
            { name: "gary", rota: ["tuesday", "wednesday", "SUNDAY"] },
            { name: "sally", rota: ["Sunday", "thUrsday"] },
            { name: "tom", rota: ["tuesday", "Wednesday", "Friday"] },
            { name: "jess", rota: ["sunday", "Monday"] },
            { name: "james", rota: ["wedNesDay", "friday"] },
            { name: "mike", rota: ["thursday", "Friday", "Saturday"] }
        ];

        expect(areWeCovered(staff, "SUNDAY")).toBe(true);
        expect(areWeCovered(staff, "wednesday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
        expect(areWeCovered(staff, "friDAY")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(false);
        expect(areWeCovered(staff, "Thursday")).toBe(false);
    });
});