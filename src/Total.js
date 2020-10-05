import React, { Component } from 'react';
import USCurrencyFormat from './USCurrencyFormat.js'

class Total extends Component {
    render() {
        const {total} = this.props
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        );
    }
}

export default Total;