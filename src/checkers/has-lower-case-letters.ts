import { ValidationResult } from "../interfaces";
import { hasRegex } from "./has-regex";

export function hasLowerCaseLetters(str: string, neededAmount: number): ValidationResult {
    return hasRegex(str, /\p{Ll}/gu, "строчных букв", neededAmount);
}