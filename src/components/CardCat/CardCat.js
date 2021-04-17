import React, { Component } from "react";
import CardBg from "./img/image-cat.jpg";
import ArrowCat from "./img/arrow-cat.svg";
import "./CardCat.sass";
import Grid from "@material-ui/core/Grid";

class CardCat extends Component {
  render(props) {
    return (
      <a href={this.props.link} target={this.props.target} className={this.props.style + " du-card-cat"}>
        <figure>
          <img src={this.props.imgBg} className="du-card-cat__cover"></img>
          <figcaption>
            <h3 className="du-card-cat__title">{this.props.text}</h3>
            <img src={ArrowCat}></img>
          </figcaption>
        </figure>
      </a>
    );
  }
}

export default CardCat;
