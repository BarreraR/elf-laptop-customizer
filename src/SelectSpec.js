import React, { Component } from 'react';
import Spec from './Spec.js'

class SelectSpec extends Component {
    render() {
        const { feature, idx, selected, updateFeature } = this.props;
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => 
            <Spec 
            item={item}
            feature={feature} 
            selected={selected} 
            updateFeature={updateFeature}/>);
        
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
          );
    }
}

export default SelectSpec;