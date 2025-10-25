import { ValidationResult } from "../interfaces";
import { hasRegex } from "./has-regex";

export function hasUpperCaseLetters(str: string, neededAmount: number): ValidationResult {
    return hasRegex(str, /\p{Lu}/gu , "заглавных букв", neededAmount);
}