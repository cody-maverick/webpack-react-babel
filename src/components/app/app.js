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
            weather: {temperature: 552}
        }
    }

    weatherService = new WeatherService();
    geoCode = new Geocode();

    onSubmitForm = async (e) => {
        e.preventDefault();
        let inputVal = e.currentTarget.querySelector('input').value;
        let cities = await this.geoCode.geoCodeCity(inputVal);
        let place = cities[0]; // первое место из списка
        let weatherJSON = await this.weatherService.getWeatherCurrently(place.lat, place.lon);
        console.log(weatherJSON);
        this.setState({
            weather: weatherJSON
        })
    };


    render() {
        console.log('State app', this.state)
        return (
            <div className="app">
                <h1 className="app__title">
                    weather
                </h1>
                <CityInput onSubmitForm={this.onSubmitForm.bind(this)}/>
                <Weather weather={this.state.weather}/>
            </div>
        )
    }
}