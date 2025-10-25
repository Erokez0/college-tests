import { ValidationResult } from "../interfaces";

const specialSymbolset = new Set<string>([
    "!", ".", ",", ";", ":", "?",
    "'", "\"", "`",
    "\\", "/",
    "~", "@", "#", '№', "$", "^", "*", "_",
    "+", "%", "-", "=", "<", ">",
    "[", "]", "{", "}", "(", ")",
]);

export function hasSpecialSymbols(str: string, neededAmount: number): ValidationResult {
    const gotAmount = str.split("").reduce( (acc, val) => {
        if (specialSymbolset.has(val)) {
            return acc + 1;
        }
        return acc;
    }, 0);

    const success = gotAmount >= neededAmount;
    const error = success ? "" 
      : `минимальное количество специальных символов: ${neededAmount}, полученное количество специальных символов: ${gotAmount}`;

    const result: ValidationResult = {
      Success: success,
      Error: error ? [error] : [],
    };

    return result;
}