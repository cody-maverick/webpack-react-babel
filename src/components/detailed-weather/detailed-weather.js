import {Component} from 'react';

import DetailedWeatherInn from '../detailed-weather-inn/detailed-weather-inn'
import Loader from '../loader/loader'

import './detailed-weather.less';

export default class DetailedWeather extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        console.log(this.props);
    }

    render() {
        // const {weatherInTime, onLoading} = this.state;
        // const weather = onLoading === false ? <DetailedWeatherInn weatherInTime={weatherInTime}/> : <Loader/>;

        const {time, ...items} = this.props.location.state.weatherDaily;

        return (
            <div className="weather-app">
                <h1 className="weather-app__title">
                    <i className="wi wi-day-cloudy">

                    </i>
                    weather
                </h1>
                <div className="detailed-weather">
                    <div className="detailed-weather__time">
                        {time}
                    </div>
                </div>
            </div>
        )
    }
}