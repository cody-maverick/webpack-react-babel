import {Component} from 'react'
import CityInput from '../city-input'
import Weather from '../weather/weather'

import Geocode from '../../services/geocode'
import WeatherService from "../../services/weather-service"

import './app.less';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: null,
            place: null,
            weatherHourly: null
        }
    }

    weatherService = new WeatherService();
    geoCode = new Geocode();

    async componentDidMount() {
        this.setWeatherCurrently();
        this.setWeatherHourly()
    }

    onSubmitForm = async (e) => {
        e.preventDefault();
        this.setState({
            weather: null,
            place: null,
            weatherHourly: null
        });
        await this.setWeatherHourly();
        await this.setWeatherCurrently();

    };

    getPlace = async () => {
        let cityInput = document.querySelector('#city-input');
        let inputVal = cityInput.value;
        return await this.getCities(inputVal);
    };

    setWeatherCurrently = async () => {
        let place = await this.getPlace();
        let weather = await this.weatherService.getWeatherCurrently(place.lat, place.lon);
        console.log(weather);
        this.setState({
            weather
        })
    };

    setWeatherHourly = async () => {
        let place = await this.getPlace();
        let weatherHourly = await this.weatherService.getWeatherHourly(place.lat, place.lon);
        console.log(weatherHourly);
        this.setState({
            weatherHourly
        })
    };

    cityNameSeparator = ({place}) => {
        let placeArray = place.split(', ');
        let mainCityName = placeArray.shift();
        let mainCityNameDescription = placeArray.join(', ');
        this.setState({
            place: {
                mainCityName,
                mainCityNameDescription
            }
        })
    }

    getCities = async (val) => {
        let cities = await this.geoCode.geoCodeCity(val);
        let place = cities[0]; // первое место из списка
        this.cityNameSeparator(place);
        return place;
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
                <Weather weather={this.state.weather} place={this.state.place} weatherHourly={this.state.weatherHourly}/>
            </div>
        )
    }
}