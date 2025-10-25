import { ValidatePassword } from ".";

describe("ValidatePassword", () => {

    const hasOneNumberSuccessData = [
        "Aa!!aaa1",
        "Aa!!aaa11",
        "Aa!!aaa111",
        "Aa!!aaa1111",
    ]
        

    test.each(hasOneNumberSuccessData)("%s_hasOneNumber_SuccessNoError", (password) =>
        expect(ValidatePassword(password)).toStrictEqual({
            Success: true,
            Error: [],
        })
    );

    test("@Bc#bbbb_HasOneNumber_MinOneNumberError", () => {
        expect(ValidatePassword("@Bc#bbbb")).toStrictEqual({
            Success: false,
            Error:  [
                `минимальное количество цифр: 1, полученное количество цифр: 0`
            ]
        });
    });

    const hasOneLowerCaseLetterSuccessData = [
        "aBCD###1",
        "abCD###1",
        "abcD###1",
        "abcdF###1",
    ]

    test.each(hasOneLowerCaseLetterSuccessData)("%s_hasOneLowerCaseLetter_SuccessNoError", (password) => {
        expect(ValidatePassword(password)).toStrictEqual({
            Success: true,
            Error: [],
        })
    })

    test("ABCD###1_HasOneLowerCaseLetter_MinOneLowerCaseLetterError", () =>
        expect(ValidatePassword("ABCD###1")).toStrictEqual({
            Success: false,
            Error: [
                `минимальное количество строчных букв: 1, полученное количество строчных букв: 0`,
            ]
        })
    );

    const hasOneUpperCaseLetterSuccessData = [
        "Abcd###1",
        "ABcd###1",
        "ABCd###1",
        "ABCDe##1",
    ]

    test.each(hasOneUpperCaseLetterSuccessData)("%s_hasOneUpperCaseLetter_SuccessNoError", (password) => {
        expect(ValidatePassword(password)).toStrictEqual({
            Success: true,
            Error: [],
        })
    });

    test("abcd###1_HasOneUpperCaseLetter_MinOneUpperCaseLetterError", () => {
        expect(ValidatePassword("abcd###1")).toStrictEqual({
            Success: false,
            Error: [
                `минимальное количество заглавных букв: 1, полученное количество заглавных букв: 0`,
            ]
        })
    });

    const hasTwoSpecialSymbolsSuccessData = [
        "Abcde1/@",
        "Abcd1\\=#",
        "Abc1\"@_$",
    ]

    test.each(hasTwoSpecialSymbolsSuccessData)("%s_HasTwoSpecialSymbols_SuccessNoError", (password) => {
        expect(ValidatePassword(password)).toStrictEqual({
            Success: true,
            Error: [],
        })
    });

    const hasTwoSpecialSymbolsErrorData: [string, number][] = [
        [ "Abcdefg1", 0 ],
        [ "Abcdef1!", 1 ],
    ]

    test.each(hasTwoSpecialSymbolsErrorData)("%s_HasTwoSpecialSymbols_MinTwoSpecialSymbolsError", (password, amount) => {
        expect(ValidatePassword(password)).toStrictEqual({
            Success: false,
            Error: [
                `минимальное количество специальных символов: 2, полученное количество специальных символов: ${amount}`
            ]
        })
    });

    const hasMinLengthEightErrorData: [ string, number ][] = [
        [ "Ab1!!", 5 ],
        [ "Abb1!!", 6 ],
        [ "Abbb1!!", 7 ],
    ]

    test.each(hasMinLengthEightErrorData)("%s_HasMinLengthEight_MinLengthEightError", (password, length) => {
        expect(ValidatePassword(password)).toStrictEqual({
            Success: false,
            Error: [
                `минимальная длина: 8, полученная длина: ${length}`,
            ],
        })
    });

    const hasMinLengthEightSuccessData = [
        "Abcd##11",
        "Abcd##111",
        "Abcd##1111",
        "Abcd##11111",
        "Abcd##111111",
        "Abcd##1111111",
        "Abcd##11111111",
    ]

    test.each(hasMinLengthEightSuccessData)("%s_HasMinLengthEight_SuccessNoError", (password) => {
        expect(ValidatePassword(password)).toStrictEqual({
            Success: true,
            Error: [],
        })
    });
});