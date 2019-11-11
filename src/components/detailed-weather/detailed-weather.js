import {Component} from 'react';

import './detailed-weather.less';

export default class DetailedWeather extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="detailed-weather">
               <h1 className="detailed-weather__title">
                   Detailed weather
               </h1>
            </div>
        )
    }
}