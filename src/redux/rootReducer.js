import { NUMBER, COMMA, CLEAR, EQUAL, ADD, SUBTRACT, MULTIPLY, DIVISION } from "./actionCreator";
import { combineReducers } from "redux";
import { evaluate } from 'mathjs';

const initialState = {
    symbols: [0]
}

function removeRepeatedSymbols(arr) {
    return  arr.join('')
               .replace(/([-+*./])\1{1,}/g, '$1')
               .split('');
}

function removeCommaExpression(arr) {
    let result = [];
    let numbers =  arr.join('').split(/[-+*/]/);
    let expressions = arr.join('').replace(/[0-9.]/g ,'').split('');
    numbers.forEach((number, index) => {
        let commaIndex = number.indexOf('.')
        if(commaIndex !== -1 && commaIndex !== number.length -1)
            number = number.slice(0, -1);
        result.push(number)
        if(expressions[index]) result.push(expressions[index]);
    })
    return result;
}

function calcReducer(state= initialState, action) {
    switch (action.type) {
        case NUMBER: {
            let symbols = state.symbols;
            if(symbols.length === 1 && symbols[0] === 0) {
                symbols[0] = action.payload;
            }
            else symbols.push(action.payload);
            return { symbols };
        }

        case COMMA: {
            let symbols = state.symbols;
            let isExpression = (/^[-+*/]/).test(symbols[symbols.length - 1]);
            if(isExpression) return state;
            symbols.push('.');
            symbols = removeRepeatedSymbols(symbols);
            symbols = removeCommaExpression(symbols)
            return { symbols }
        }

        case CLEAR: {
            return { symbols: [0] };
        }

        case EQUAL: {
            let symbols = state.symbols;
            let isExpression = (/^[-+*./]/).test(symbols[symbols.length - 1]);
            return  isExpression
                        ? state
                        : { symbols: [evaluate(symbols.join(''))] };
        }

        case ADD: {
            let symbols = state.symbols;
            let isExpression = (/^[-*./]/).test(symbols[symbols.length - 1]);
            isExpression
                ? symbols[symbols.length -1] = '+'
                : symbols.push('+');
            return { symbols: removeRepeatedSymbols(symbols) };
        }

        case SUBTRACT: {
            let symbols = state.symbols;
            let isExpression = (/^[+*./]/).test(symbols[symbols.length - 1]);
            isExpression
                ? symbols[symbols.length -1] = '-'
                : symbols.push('-');
            return { symbols: removeRepeatedSymbols(symbols) };
        }

        case MULTIPLY: {
            let symbols = state.symbols;
            let isExpression = (/^[-+./]/).test(symbols[symbols.length - 1]);
            isExpression
                ? symbols[symbols.length -1] = '*'
                : symbols.push('*');
            return { symbols: removeRepeatedSymbols(symbols) };
        }

        case DIVISION: {
            let symbols = state.symbols;
            let isExpression = (/^[-+*.]/).test(symbols[symbols.length - 1]);
            isExpression
                ? symbols[symbols.length -1] = '/'
                : symbols.push('/');
            return { symbols: removeRepeatedSymbols(symbols) };
        }

        default: return state;
    }
}

export const rootReducer = combineReducers({
    calc: calcReducer
})
