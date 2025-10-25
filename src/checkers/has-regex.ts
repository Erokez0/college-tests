import { ValidationResult } from "../interfaces";

/**
 * @param str строка для проверки
 * @param regex 
 * @param nameOfConstraint текстовое обозначение требования в родительном падеже
 * @param neededAmount 
 * @returns {ValidationResult} результат проверки 
 */
export function hasRegex(str: string, regex: RegExp, nameOfConstraint: string, neededAmount: number = 1): ValidationResult {
    const gotAmount = str.match(regex)?.length || 0;

    const success = gotAmount >= neededAmount;
    const error = success ? ""
        : `минимальное количество ${nameOfConstraint}: ${neededAmount}, полученное количество ${nameOfConstraint}: ${gotAmount}`;

    const result: ValidationResult = {
        Success: success,
        Error: error ? [error] : [],
    };

    return result;
};