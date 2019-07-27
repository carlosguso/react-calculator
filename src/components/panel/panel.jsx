import React, {Component} from "react";
import "./panel.css";

import Media from "react-media";

import Button from "../button/button";

export default class Panel extends Component {


    handleClick = (name) => {
        this.props.clickHandler(name);
    };
    
    render(){
        return (
            <Media query={{maxWidth: 1199}}>
            {matches => 
                matches ? this.renderVertical() : this.renderHorizontal()
            }
            </Media>
        );
    }

    renderVertical = () => {
        return(
            <div className="panel">
                <div className="row">
                    <Button name="AC" clickHandler={this.handleClick} gray/>
                    <Button name="+/-" clickHandler={this.handleClick} gray/>
                    <Button name="%" clickHandler={this.handleClick} gray/>
                    <Button name="/" clickHandler={this.handleClick} orange/>
                </div>
                <div className="row">
                    <Button name="7" clickHandler={this.handleClick} light/>
                    <Button name="8" clickHandler={this.handleClick} light/>
                    <Button name="9" clickHandler={this.handleClick} light/>
                    <Button name="x" clickHandler={this.handleClick} orange/>
                </div>
                <div className="row">
                    <Button name="4" clickHandler={this.handleClick} light/>
                    <Button name="5" clickHandler={this.handleClick} light/>
                    <Button name="6" clickHandler={this.handleClick} light/>
                    <Button name="-" clickHandler={this.handleClick} orange/>
                </div>
                <div className="row">
                    <Button name="1" clickHandler={this.handleClick} light/>
                    <Button name="2" clickHandler={this.handleClick} light/>
                    <Button name="3" clickHandler={this.handleClick} light/>
                    <Button name="+" clickHandler={this.handleClick} orange/>
                </div>
                <div className="row">
                    <Button name="0" clickHandler={this.handleClick} wide light/>
                    <Button name="." clickHandler={this.handleClick} light/>
                    <Button name="=" clickHandler={this.handleClick} orange/>
                </div>
            </div>
        );
    }

    renderHorizontal = () => {
        return(
            <div className="panel">
                <div className="row">
                    <Button name="(" clickHandler={this.handleClick}/>
                    <Button name=")" clickHandler={this.handleClick}/>
                    <Button name="mc" clickHandler={this.handleClick}/>
                    <Button name="m+" clickHandler={this.handleClick}/>
                    <Button name="m-" clickHandler={this.handleClick}/>
                    <Button name="mr" clickHandler={this.handleClick}/>
                    <Button name="AC" clickHandler={this.handleClick} gray/>
                    <Button name="+/-" clickHandler={this.handleClick} gray/>
                    <Button name="%" clickHandler={this.handleClick} gray/>
                    <Button name="/" clickHandler={this.handleClick} orange/>
                </div>
                <div className="row">
                    <Button name="2nd" clickHandler={this.handleClick}/>
                    <Button name="x^2" clickHandler={this.handleClick}/>
                    <Button name="x^3" clickHandler={this.handleClick}/>
                    <Button name="x^y" clickHandler={this.handleClick}/>
                    <Button name="e^x" clickHandler={this.handleClick}/>
                    <Button name="10^x" clickHandler={this.handleClick}/>
                    <Button name="7" clickHandler={this.handleClick} light/>
                    <Button name="8" clickHandler={this.handleClick} light/>
                    <Button name="9" clickHandler={this.handleClick} light/>
                    <Button name="x" clickHandler={this.handleClick} orange/>
                </div>
                <div className="row">
                    <Button name="1/x" clickHandler={this.handleClick}/>
                    <Button name="2√x" clickHandler={this.handleClick}/>
                    <Button name="3√x" clickHandler={this.handleClick}/>
                    <Button name="y√x" clickHandler={this.handleClick}/>
                    <Button name="ln" clickHandler={this.handleClick}/>
                    <Button name="log10" clickHandler={this.handleClick}/>
                    <Button name="4" clickHandler={this.handleClick} light/>
                    <Button name="5" clickHandler={this.handleClick} light/>
                    <Button name="6" clickHandler={this.handleClick} light/>
                    <Button name="-" clickHandler={this.handleClick} orange/>
                </div>
                <div className="row">
                    <Button name="x!" clickHandler={this.handleClick}/>
                    <Button name="sin" clickHandler={this.handleClick}/>
                    <Button name="cos" clickHandler={this.handleClick}/>
                    <Button name="tan" clickHandler={this.handleClick}/>
                    <Button name="e" clickHandler={this.handleClick}/>
                    <Button name="EE" clickHandler={this.handleClick}/>
                    <Button name="1" clickHandler={this.handleClick} light/>
                    <Button name="2" clickHandler={this.handleClick} light/>
                    <Button name="3" clickHandler={this.handleClick} light/>
                    <Button name="+" clickHandler={this.handleClick} orange/>
                </div>
                <div className="row">
                    <Button name="rad" clickHandler={this.handleClick}/>
                    <Button name="sinh" clickHandler={this.handleClick}/>
                    <Button name="cosh" clickHandler={this.handleClick}/>
                    <Button name="tanh" clickHandler={this.handleClick}/>
                    <Button name="π" clickHandler={this.handleClick}/>
                    <Button name="Rand" clickHandler={this.handleClick}/>
                    <Button name="0" clickHandler={this.handleClick} wide light/>
                    <Button name="." clickHandler={this.handleClick} light/>
                    <Button name="=" clickHandler={this.handleClick} orange/>
                </div>
            </div>
        );
    }

}