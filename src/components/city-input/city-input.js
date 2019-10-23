import React, {Component} from 'react';
import WeatherService from '../../services/weather-service';

import  './city-input.less';

export default class CityInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 'Город'
        }
    }

    render() {
        return (
            <div className="city">
                <input type="text" defaultValue={this.state.val}/>
            </div>
        )
    }
}