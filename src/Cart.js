import React, { Component } from 'react';
import CartSpec from './CartSpec';
import Total from './Total';

class Cart extends Component {

    render() {
        const { selected } = this.props;
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            
            return <CartSpec 
            featureHash={featureHash} 
            selectedOption={selectedOption} 
            feature={feature}/> 
        });

        const total = Object.keys(selected).reduce(
            (acc, curr) => acc + selected[curr].cost,
            0
        );
    
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total total={total}/>
            </section>
        );
    }
}

export default Cart;