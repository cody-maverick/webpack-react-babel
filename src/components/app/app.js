import React, {Component} from 'react'
import CityInput from '../city-input'
import Weather from '../weather/weather'

import Geocode from '../../services/geocode'
import WeatherService from "../../services/weather-service"

import './app.less';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: null
        }
    }

    weatherService = new WeatherService();
    geoCode = new Geocode();

    async componentDidMount() {
        this.getWeatherCurrently();
    }

    onSubmitForm = async (e) => {
        e.preventDefault();
        this.getWeatherCurrently();
        this.setState({
            weather: null
        })
    };

    getWeatherCurrently = async () => {
        let cityInput = document.querySelector('#city-input');
        let inputVal = cityInput.value;
        let place = await this.getCities(inputVal);
        let weather = await this.getWeather(place);
        console.log(weather);
        this.setState({
            weather
        })
    }

    getCities = async (val) => {
        let cities = await this.geoCode.geoCodeCity(val);
        let place = cities[0]; // первое место из списка
        this.setState({
            place: place.place
        })
        return place;

    };

    getWeather = async (place) => {
        const weatherJSON = await this.weatherService.getWeatherCurrently(place.lat, place.lon);
        return weatherJSON
    };

    render() {
        console.log('State app', this.state);
        return (
            <div className="weather-app">
                <h1 className="weather-app__title">
                    <i className="wi wi-day-cloudy">

                    </i>
                    weather
                </h1>
                <CityInput onSubmitForm={this.onSubmitForm.bind(this)}/>
                <Weather weather={this.state.weather} place={this.state.place}/>
            </div>
        )
    }
}