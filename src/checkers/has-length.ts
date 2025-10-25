import { ValidationResult } from "../interfaces";

export function hasLegth(str: string, minLength: number): ValidationResult {
    const length = str.length;

    const success =  length >= minLength;
    const error = success ? ""
        : `минимальная длина: ${minLength}, полученная длина: ${length}`;

    const result: ValidationResult = {
        Success: success,
        Error: error ? [error] : [],
    };

    return result;
}