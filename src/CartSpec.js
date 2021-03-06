import React, { Component } from 'react';
import USCurrencyFormat from './USCurrencyFormat.js'
 
class CartSpec extends Component {

    
    render(){
        const { featureHash, selectedOption, feature } = this.props;

        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        );
    }
}

export default CartSpec;