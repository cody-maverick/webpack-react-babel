import {Component} from 'react';

import WeatherInn from './weather-inn/weather-inn';
import WeatherHourly from "./weather-hourly/weather-hourly";
import WeatherDaily from "./weather-daily/weather-daily";
import Loader from '../loader/loader'

import '../../assets/css/weather-icons.min.css';
import './weather.less';
import CityInput from "../city-input";

export default class Weather extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const weatherMainInfo = this.props.weather !== null ?
            <WeatherInn weather={this.props.weather} place={this.props.place}/> : <Loader/>;
        const weatherHourly = this.props.weatherHourly !== null ?
            <WeatherHourly weatherHourly={this.props.weatherHourly}/> : <Loader/>;
        const weatherDaily = this.props.weatherDaily !== null ? <WeatherDaily weatherDaily={this.props.weatherDaily}/> :
            <Loader/>;
        return (
            <div className="weather-app">
                <h1 className="weather-app__title">
                    <i className="wi wi-day-cloudy">

                    </i>
                    weather
                </h1>
                <CityInput onSubmitForm={(e) => this.props.onSubmitForm(e)}/>
                <div className="weather-app__info">
                    {weatherMainInfo}
                    {weatherHourly}
                    {weatherDaily}
                </div>
            </div>
        )
    }
}