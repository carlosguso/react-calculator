import React, {Component} from 'react';
import "./button.css";

export default class Button extends Component {

    constructor(props) {
        super(props);
        this.classes = [];
    }

    handleClick = () => {
        this.ops = ["+", "-", "/", "x"];
        for (const x in this.ops) {
            if (this.props.name === this.ops[x]) {
                this.props.clickHandler(this.props.name, true);
                return;
            }
        }
        this.props.clickHandler(this.props.name);
    };

    render() {
        this.classes = [
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : "",
            this.props.gray ? "gray" : "",
            this.props.light ? "light" : ""
        ];
        return(
            <button className={this.classes.join(" ").trim()} onClick={this.handleClick}>{this.props.name}</button>
        );
    }
}
