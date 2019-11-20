import {Component} from 'react';

import WeatherService from '../../services/weather-service'
import DetailedWeatherInn from '../detailed-weather-inn/detailed-weather-inn'
import Loader from '../loader/loader'

import './detailed-weather.less';

export default class DetailedWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    weatherService = new WeatherService();

    async componentDidMount() {
        // const {place: {lat, lon}, time} = this.state;
        // const weatherInTime = await this.weatherService.getWeatherInTime(lat, lon, time);
        // console.log(weatherInTime);
        // this.setState({
        //     weatherInTime,
        //     onLoading: false
        // })
        console.log(this.props);
    }

    render() {
        // const {weatherInTime, onLoading} = this.state;
        // const weather = onLoading === false ? <DetailedWeatherInn weatherInTime={weatherInTime}/> : <Loader/>;

        return (
            <div className="weather-app">
                <h1 className="weather-app__title">
                    <i className="wi wi-day-cloudy">

                    </i>
                    weather
                </h1>
                {/*{weather}*/}
            </div>
        )
    }
}