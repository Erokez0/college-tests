import { ValidationResult } from "../interfaces";
import { hasRegex } from "./has-regex";

export function hasNumbers(str: string, neededAmount: number): ValidationResult {
    return hasRegex(str, /[0-9]/g, "цифр", neededAmount);
}