import React, {Component} from 'react';
import WeatherService from '../../services/weather-service';
import Geocode from '../../services/geocode';

import './city-input.less';

export default class CityInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 'Город'
        }
    }

    weatherService = new WeatherService();
    geoCode = new Geocode();

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.querySelector('input').value)
        let inputVal = e.currentTarget.querySelector('input').value;
        // this.weatherService.getWeatherInCity(inputVal);
        this.geoCode.geoCodeCity(inputVal);

    };

    render() {
        return (
            <div className="city">
                <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <input type="text" defaultValue={this.state.val}/>
                </form>
            </div>
        )
    }
}