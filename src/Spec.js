import React, {Component} from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import USCurrencyFormat from './USCurrencyFormat.js'

class Spec extends Component {

    render(){
        const { item, feature, selected, updateFeature } = this.props;
        const itemHash = slugify(JSON.stringify(item));

        return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === selected[feature].name}
                onChange={e => updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
    }
}

export default Spec;