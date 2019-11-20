import {Component} from 'react';

import './city-input.less';

export default class CityInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="city">
                <form className="city-form" onSubmit={(e) => this.props.onSubmitForm(e)}>
                    <input id="city-input" className="city-form__input" type="text" defaultValue={this.props.city}/>
                    <button type="submit" className="city-form__button">
                        Найти
                    </button>
                </form>
            </div>
        )
    }
}