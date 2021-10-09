export const NUMBER = 'NUMBER';
export const COMMA = 'COMMA';
export const CLEAR = 'CLEAR';
export const EQUAL = 'EQUAL';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVISION = 'DIVISION';

export function number(number) {
    return {
        type: NUMBER,
        payload: number
    }
}

export function comma() {
    return {
        type: COMMA
    }
}

export function clear() {
    return {
        type: CLEAR
    }
}

export function equal() {
    return {
        type: EQUAL
    }
}

export function add() {
    return {
        type: ADD
    }
}

export function subtract() {
    return {
        type: SUBTRACT
    }
}

export function multiply() {
    return {
        type: MULTIPLY
    }
}

export function division() {
    return {
        type: DIVISION
    }
}