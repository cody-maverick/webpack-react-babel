import {Component} from 'react';

import WeatherInn from './weather-inn/weather-inn';
import WeatherHourly from "./weather-hourly/weather-hourly";
import Loader from '../loader/loader'

import '../../assets/css/weather-icons.min.css';
import './weather.less';

export default class Weather extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.weatherHourly);
        const weatherMainInfo = this.props.weather !== null ? <WeatherInn weather={this.props.weather} place={this.props.place}/> : <Loader/>;
        const weatherHourly = this.props.weatherHourly !== null ? <WeatherHourly weatherHourly={this.props.weatherHourly}/> : <Loader/>;
        return (
            <div className="weather-app__info">
                {weatherMainInfo}
                {weatherHourly}
            </div>
        )
    }
}