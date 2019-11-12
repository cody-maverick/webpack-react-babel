import {Component} from 'react';

import WeatherInn from './weather-inn/weather-inn';
import WeatherHourly from "./weather-hourly/weather-hourly";
import WeatherDaily from "./weather-daily/weather-daily";
import Loader from '../loader/loader'

import '../../assets/css/weather-icons.min.css';
import './weather.less';
import CityInput from "../city-input";
import {Link} from "react-router-dom";

export default class Weather extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const weatherMainInfo = this.props.weather !== null ?
            <WeatherInn
                weather={this.props.weather}
                place={this.props.place}/> : <Loader/>;
        const weatherHourly = this.props.weatherHourly !== null ?
            <WeatherHourly
                weatherHourly={this.props.weatherHourly}/> : <Loader/>;
        const weatherDaily = this.props.weatherDaily !== null ?
            <WeatherDaily
                weatherDaily={this.props.weatherDaily}
                placeCoordinate={this.props.placeCoordinate}/> :
            <Loader/>;
        return (
            <div className="weather-app">
                <h1 className="weather-app__title">
                    <i className="wi wi-day-cloudy">

                    </i>
                    weather
                </h1>
                <CityInput city={this.props.city} onSubmitForm={(e) => this.props.onSubmitForm(e)}/>
                <div className="weather-app__info">
                    {weatherMainInfo}
                    {weatherHourly}
                    {weatherDaily}
                    <Link to={{
                        pathname: `/weather/detailed_weather/`,
                        state: {link: true}
                    }}>Ссылка</Link>
                </div>
            </div>
        )
    }
}