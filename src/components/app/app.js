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
            weatherHourly: null,
            weatherDaily: null
        }
    }

    weatherService = new WeatherService();
    geoCode = new Geocode();

    async componentDidMount() {
        await this.getCityName();
        await this.getPlace();
        await console.log('Before rendering', this.state.placeCoordinate);
        await this.setWeatherCurrently(this.state.placeCoordinate);
        await this.setWeatherHourly(this.state.placeCoordinate);
        this.setWeatherDaily(this.state.placeCoordinate);
    }

    onSubmitForm = async (e) => {
        e.preventDefault();
        this.setState({
            weather: null,
            place: null,
            weatherHourly: null,
            weatherDaily: null,
            placeCoordinate: null
        });
        await this.getPlace();
        await console.log('Координаты 2', this.state.placeCoordinate);
        await this.saveCityName();
        await this.setWeatherHourly(this.state.placeCoordinate);
        await this.setWeatherCurrently(this.state.placeCoordinate);
        await this.setWeatherDaily(this.state.placeCoordinate);
    };

    saveCityName = () => {
        let cityInput = document.querySelector('#city-input');
        let inputVal = cityInput.value;
        localStorage.setItem('citySave', inputVal);
    };

    getCityName = () => {
        if (localStorage.getItem('citySave')) {
            let cityInput = document.querySelector('#city-input');
            cityInput.value = localStorage.getItem('citySave');
        }
    };

    getPlace = async () => {
        let cityInput = document.querySelector('#city-input');
        let inputVal = cityInput.value;
        return await this.getCities(inputVal);
    };

    setWeatherCurrently = async ({lat, lon}) => {
        let weather = await this.weatherService.getWeatherCurrently(lat, lon);
        this.setState({
            weather
        })
    };

    setWeatherHourly = async ({lat, lon}) => {
        let weatherHourly = await this.weatherService.getWeatherHourly(lat, lon);
        this.setState({
            weatherHourly
        })
    };

    setWeatherDaily = async ({lat, lon}) => {
        let weatherDaily = await this.weatherService.getWeatherDaily(lat, lon);
        this.setState({
            weatherDaily
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
    };

    getCities = async (val) => {
        let cities = await this.geoCode.geoCodeCity(val);
        let place = cities[0]; // первое место из списка
        this.cityNameSeparator(place);
        this.setState({
            placeCoordinate: place
        })
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
                <Weather weather={this.state.weather}
                         place={this.state.place}
                         weatherHourly={this.state.weatherHourly}
                         weatherDaily={this.state.weatherDaily}/>
            </div>
        )
    }
}