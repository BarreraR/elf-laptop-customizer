import React, { Component } from 'react';
import Spec from './Spec.js'
import slugify from 'slugify';

class SelectSpec extends Component {
    render() {
        const { feature, idx, selected, updateFeature } = this.props;
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => 
            <Spec 
            key={slugify(JSON.stringify(item))}
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