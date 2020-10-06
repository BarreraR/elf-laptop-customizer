import React, { Component } from 'react';
import CartSpec from './CartSpec';
import Total from './Total';
import slugify from 'slugify';

class Cart extends Component {

    render() {
        const { selected } = this.props;
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            
            return <CartSpec 
            key={slugify(JSON.stringify(feature))}
            featureHash={featureHash} 
            selectedOption={selectedOption} 
            feature={feature}/> 
        });
    
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total selected={selected}/>
            </section>
        );
    }
}

export default Cart;