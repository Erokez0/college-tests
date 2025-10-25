import { hasLowerCaseLetters } from "./checkers/has-lower-case-letters";
import { hasNumbers } from "./checkers/has-numbers";
import { hasSpecialSymbols } from "./checkers/has-special-symbols";
import { hasLegth } from "./checkers/has-length";
import { hasUpperCaseLetters } from "./checkers/has-upper-case-letters";
import { ValidationResult } from "./interfaces/validation-result";

export function ValidatePassword(password: string): ValidationResult {
    const results: ValidationResult[] = [];

    results.push(hasNumbers(password, 1));
    results.push(hasLowerCaseLetters(password, 1));
    results.push(hasUpperCaseLetters(password, 1));
    results.push(hasSpecialSymbols(password, 2));
    results.push(hasLegth(password, 8));

    const joinedResult = results.reduce( (joined, result) => {
        return {
            Success: joined.Success && result.Success,
            Error: [...joined.Error, ...result.Error]
        }
    }, {
        Success: true,
        Error: [],
    } as ValidationResult);

    return joinedResult;
}