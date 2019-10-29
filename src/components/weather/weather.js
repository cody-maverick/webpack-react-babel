import React, {Component} from 'react';

import WeatherInn from './weather-inn/weather-inn';

import '../../assets/css/weather-icons.min.css';
import './weather.less';


export default class Weather extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.weather);
        const weatherMainInfo = this.props.weather !== null ? <WeatherInn weather={this.props.weather} place={this.props.place}/> : 'Загрузка...';
        return (
            <div className="weather-app__info">
                {weatherMainInfo}
            </div>
        )
    }
}