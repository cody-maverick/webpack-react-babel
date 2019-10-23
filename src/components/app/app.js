import React, {Component} from 'react';
import CityInput from '../city-input'

import './app.less';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <h1 className="app__title">
                    REACT TITLE
                </h1>
                <CityInput/>
            </div>
        )
    }
}