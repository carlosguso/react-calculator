import React, {Component} from "react";
import "./display.css";

export default class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="display">
                <p>{this.props.value}</p>
            </div>
        );
    }
}