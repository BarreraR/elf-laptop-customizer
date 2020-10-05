import React, { Component } from 'react';
import SelectSpec from './SelectSpec';

class Customize extends Component {
    render() {
        const { updateFeature, selected } = this.props;
        const features = Object.keys(this.props.features).map(  
            (feature, idx) => 
                <SelectSpec 
                feature={feature} 
                idx={idx} 
                features={this.props.features} 
                updateFeature={updateFeature} 
                selected={selected}/>
            );

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
          </form>
        );
    }
}

export default Customize;