import React, {Component} from 'react';

import 'weather-icons/css/weather-icons.min.css'

import WeatherInn from './weather-inn/weather-inn';

export default class Weather extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.weather);
        const render = this.props.weather !== null ? <WeatherInn weather={this.props.weather}/> : 'Загрузка...';
        return (
            <div className="weather-app__info">
                {render}
            </div>
        )
    }
}