import React from "react";
import './NumberPad.css';
import { connect } from "react-redux";
import {number, add, subtract, equal, multiply, comma, division, clear} from "../../redux/actionCreator";

const NumberPad = ({ action }) => {

    return (
        <section className='NumberPad'>
            <button onClick={() => action(number(1))} className='Number'>1</button>
            <button onClick={() => action(number(2))} className='Number'>2</button>
            <button onClick={() => action(number(3))} className='Number'>3</button>
            <button onClick={() => action(add())} className='Action'>+</button>
            <button onClick={() => action(number(4))} className='Number'>4</button>
            <button onClick={() => action(number(5))} className='Number'>5</button>
            <button onClick={() => action(number(6))} className='Number'>6</button>
            <button onClick={() => action(subtract())} className='Action'>-</button>
            <button onClick={() => action(number(7))} className='Number'>7</button>
            <button onClick={() => action(number(8))} className='Number'>8</button>
            <button onClick={() => action(number(9))} className='Number'>9</button>
            <button onClick={() => action(multiply())} className='Action'>*</button>
            <button onClick={() => action(number(0))} className='Number'>0</button>
            <button onClick={() => action(comma())} className='Number'>.</button>
            <button onClick={() => action(equal())} className='Calc'>=</button>
            <button onClick={() => action(division())} className='Action'>/</button>
            <button onClick={() => action(clear())} className='Reset'>Очистить</button>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        calc: state.calc
    }
}

function mapDispatchToProps(dispatch) {
   return {
       action: (action) => dispatch(action)
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(NumberPad);