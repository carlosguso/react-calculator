import React, {Component} from 'react';
import "./button.css";

export default class Button extends Component {

    constructor(props) {
        super(props);
        //this.classes = [];
        this.classes = [
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : "",
            this.props.gray ? "gray" : "",
            this.props.light ? "light" : ""
        ];
    }

    handleClick = () => {
        /*let index = this.classes.indexOf("selected");
        this.classes.slice(index, 1);
        this.ops = ["+", "-", "/", "x"];
        for (const x in this.ops) {
            if (this.props.name === this.ops[x]) {
                this.classes.push("selected");
                this.props.clickHandler(this.props.name, true);
                this.forceUpdate();
                return;
            }
        }*/
        this.props.clickHandler(this.props.name);
    };

    render() {
        return(
            <button className={this.classes.join(" ").trim()} onClick={this.handleClick}>{this.props.name}</button>
        );
    }
}
