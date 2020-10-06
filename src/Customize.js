import React, { Component } from 'react';
import SelectSpec from './SelectSpec';
import features from './Features'
import slugify from 'slugify';


class Customize extends Component {
    render() {
        const { updateFeature, selected } = this.props;
        const laptopFeatures = Object.keys(features).map(  
            (feature, idx) => 
                <SelectSpec 
                key={slugify(JSON.stringify(feature))}
                feature={feature} 
                idx={idx} 
                features={features} 
                updateFeature={updateFeature} 
                selected={selected}/>
            );

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {laptopFeatures}
          </form>
        );
    }
}

export default Customize;