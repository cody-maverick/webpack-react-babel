import React, {Component} from 'react';

import './city-input.less';

export default class CityInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 'Москва',
        }
    }

    render() {
        return (
            <div className="city">
                <form className="city-form" onSubmit={(e) => this.props.onSubmitForm(e)}>
                    <input id="city-input" className="city-form__input" type="text" defaultValue={this.state.val}/>
                    <button type="submit" className="city-form__button">
                        Найти
                    </button>
                </form>
            </div>
        )
    }
}