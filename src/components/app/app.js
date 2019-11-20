import {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Weather from '../weather/weather'
import Loader from '../loader/loader'
import DetailedWeather from '../detailed-weather/detailed-weather'

import Geocode from '../../services/geocode'
import WeatherService from "../../services/weather-service"
import TransformWeatherData from '../../helpers/transform-data/transform-data'

import './app.less';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: null,
            place: null,
            city: null
        };
        console.log('constructor')
    }

    weatherService = new WeatherService();
    geoCode = new Geocode();
    _transform = new TransformWeatherData();

    static getDerivedStateFromProps = (props, state) => {
        console.log('getDerivedStateFromProps()');
    }

    async componentDidMount() {
        await this.getCityName();
        await console.log(this.state.city);
        await this.getPlace();
        await this.setWeatherMain(this.state.placeCoordinate);
        console.log('componentDidMount()');
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
        await this.saveCityName();
        await this.setWeatherMain(this.state.placeCoordinate);
    };

    saveCityName = () => {
        let cityInput = document.querySelector('#city-input');
        let inputVal = cityInput.value;
        localStorage.setItem('citySave', inputVal);
        this.setState({
            city: inputVal
        })
    };

    getCityName = () => {
        if (localStorage.getItem('citySave') !== null) {
            console.log('Есть citySAve');
            let cityInput = document.querySelector('#city-input');
            cityInput.value = localStorage.getItem('citySave');
            this.setState({
                city: cityInput.value
            })
        } else {
            this.setState({
                city: 'Москва'
            })
        }
    };

    getPlace = async () => {
        let cityInput = document.querySelector('#city-input');
        let inputVal = cityInput.value;
        return await this.getCities(inputVal);
    };

    setWeatherMain = async ({lat, lon}) => {
        let weather = await this.weatherService.getWeatherMain(lat, lon);
        await console.log(weather);
        this.setState({
            weather
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
        console.log('render()');
        console.log(this.state);
        const {weather, city, place} = this.state;
        return (
            <div className="app">
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/weather/"
                            render={() =>
                                <Weather
                                    weather={weather !== null ? this._transform._transformWeatherCurrently(weather.currently) : null}
                                    city={city}
                                    place={place}
                                    weatherHourly={weather !== null ? this._transform._transformWeatherHourly(weather.hourly.data) : null}
                                    weatherDaily={weather !== null ? this._transform._transformWeatherDaily(weather.daily.data) : null}
                                    onSubmitForm={this.onSubmitForm}
                                />

                            }/>
                        <Route
                            exact
                            path="/weather/loader/"
                            render={() => <Loader/>}/>
                        <Route
                            extract
                            path="/weather/detailed_weather"
                            render={(props) => <DetailedWeather {...props}/>}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}