import React from "react";
import './Display.css'
import {connect} from "react-redux";

const Display = ({ calc }) => {
    return (
        <section className='Display'>
            <span>Калькулятор</span>
            <p>{ calc.symbols.join('') }</p>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        calc: state.calc
    }
}

export default connect(mapStateToProps,null)(Display);