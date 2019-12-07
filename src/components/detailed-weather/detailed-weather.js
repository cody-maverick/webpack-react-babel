import {Component} from 'react';

import DetailedWeatherInn from '../detailed-weather-inn/detailed-weather-inn'
import Loader from '../loader/loader'

import './detailed-weather.less';

import WeatherIcon from "../weather/weather-icon";
import MoonPhase from "../moon-phase/moon-phase";

export default class DetailedWeather extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        console.log('detailed', this.props);
    }

    render() {

        const {time, temperatureMax, temperatureMin, icon, summary, humidity, windSpeed, pressure, uvIndex, moonPhase, ...items} = this.props.location.state.weatherDaily;
        const weekday = this.props.location.state.time;

        return (
            <div className="weather-app">
                <h1 className="weather-app__title">
                    <i className="wi wi-day-cloudy"></i>
                    weather
                </h1>

                <div className="detailed-weather">
                    <div className="detailed-weather__time">
                        {time}, {weekday.toLowerCase()}
                    </div>

                    <div className="detailed-weather__inn detailed-weather-inn">
                        <div className="detailed-weather-inn__main detailed-weather-inn-main">
                            <div className="detailed-weather-inn-main__temperature">
                                <span>{temperatureMax}&deg;</span>
                                <span>{temperatureMin}&deg;</span>
                            </div>
                            <WeatherIcon icon={icon}/>
                            <div className="detailed-weather-inn-main__state">
                                {summary}
                            </div>
                        </div>
                    </div>
                    <div className="detailed-weather-index">
                        <ul className="detailed-weather-index-list">
                            <li className="detailed-weather-index-list__item">
                                <i className="wi wi-humidity"></i>
                                <span>{humidity}%</span>
                            </li>
                            <li className="detailed-weather-index-list__item">
                                <i className="wi wi-strong-wind"></i>
                                <span>{windSpeed} м/с</span>
                            </li>
                            <li className="detailed-weather-index-list__item">
                                <i className="wi wi-barometer"></i>
                                <span>{pressure} мм рт. ст.</span>
                            </li>
                            <li className="detailed-weather-index-list__item">
                                <i>uv</i>
                                <span>{uvIndex}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="moon-phase">
                        <MoonPhase phase={moonPhase}/>
                    </div>
                </div>


            </div>
        )
    }
}