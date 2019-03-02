import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: 'ButtonA'
        };
        this.defaultCallback = this.defaultCallback.bind(this);
    }

    componentDidMount() {
        const {ButtonA, ButtonB} = this.refs;

        !!ButtonA && ButtonA.addEventListener('touchstart', () => {
            ButtonA.style.backgroundColor = '#0e80d2';
            ButtonA.style.color = 'rgba(255, 255, 255, 0.3)';
        });
        !!ButtonA && ButtonA.addEventListener('touchend', () => {
            ButtonA.style.backgroundColor = '#108ee9';
            ButtonA.style.color = '#fff';
        });

        !!ButtonB && ButtonB.addEventListener('touchstart', () => {
            ButtonB.style.borderColor = '#0e80d2';
        });
        !!ButtonB && ButtonB.addEventListener('touchend', () => {
            ButtonB.style.borderColor = '#4b4b49';
        });
    }

    defaultCallback = () => {};

    render() {
        const buttonName = !this.props.buttonName ? this.state.buttonName : this.props.buttonName;
        return (
            <div className="ButtonDiv" onClick={this.props.callback || this.defaultCallback}>
                <a className={buttonName} ref={buttonName}>
                    <span className="ButtonSpan">{this.props.name}</span>
                </a>
            </div>
        );
    }
}

export default Button;