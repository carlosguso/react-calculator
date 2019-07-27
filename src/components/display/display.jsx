import React, {Component} from "react";
import "./display.css";

export default class Display extends Component {

    render() {
        return(
            <div className="display">
                <p className="radView">{this.props.rad ? "rad" : ""}</p>
                <p>{this.props.value}</p>
            </div>
        );
    }
}