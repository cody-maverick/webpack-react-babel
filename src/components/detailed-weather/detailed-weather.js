import {Component} from 'react';

import DetailedWeatherInn from '../detailed-weather-inn/detailed-weather-inn'
import Loader from '../loader/loader'

import './detailed-weather.less';
import WeatherIcon from "../weather/weather-icon";

export default class DetailedWeather extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        console.log('detailed', this.props);
    }

    render() {

        const {time, temperatureMax, temperatureMin, icon, summary, ...items} = this.props.location.state.weatherDaily;
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
                        <ul className="detailed-weather-inn__list detailed-weather-list">

                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}