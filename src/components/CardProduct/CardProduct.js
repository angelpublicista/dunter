import React, { Component } from 'react';
import ImgProduct from "./img/image-card-product.jpg";
import M2 from "./img/m2.svg";
import "./CardProduct.sass";
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';

export default class CardProduct extends Component {
    render(props) {
        return (
            <div className="du-card-product">
                <div className="du-card-product__cont-img">
                    <img src={this.props.imgProduct}></img>
                    <span className="du-card-product__price">${this.props.priceProduct}</span>
                    <div className="du-card-product__caption">
                        <a href={this.props.linkSingle} className="du-card-product__caption-item">
                            <AddIcon />
                        </a>
                        <button data-product={this.props.addFavorite} className="du-card-product__caption-item">
                            <StarIcon />
                        </button>
                    </div>
                </div>
                <div className="du-card-product__content">
                    <figure className="du-card-product__line"></figure>
                    <a href={this.props.linkCat} className="du-card-product__state">En venta</a>
                    <a href={this.props.linkSingle}><h3 className="du-card-product__title">Casa en venta</h3></a>
                    <a href={this.props.linkLocation}><h2 className="du-card-product__location">Choachí - Cundinamarca</h2></a>
                    <div className="du-card-product__status">
                        <div className="du-card-product__qualification">
                            <span><StarIcon fontSize="Small" /></span>
                            <span><StarIcon fontSize="Small" /></span>
                            <span><StarIcon fontSize="Small" /></span>
                            <span><StarIcon fontSize="Small" /></span>
                            <span><StarIcon fontSize="Small" /></span>
                        </div>
                        <div className="du-card-product__comments">
                            <span>5 comentarios</span>
                        </div>
                    </div>
                    <div className="du-card-product__cont-icons">
                        <div className="du-card-product__icon-item">
                            <div className="du-card-product__icon-cont-img">
                                <img src={M2}></img>
                            </div>
                            <span className="du-card-product__icon-number">123</span>
                            <span className="du-card-product__icon-name">m2</span>
                        </div>
                        <div className="du-card-product__icon-item">
                            <div className="du-card-product__icon-cont-img">
                                <img src={M2}></img>
                            </div>
                            <span className="du-card-product__icon-number">123</span>
                            <span className="du-card-product__icon-name">m2</span>
                        </div>
                        <div className="du-card-product__icon-item">
                            <div className="du-card-product__icon-cont-img">
                                <img src={M2}></img>
                            </div>
                            <span className="du-card-product__icon-number">123</span>
                            <span className="du-card-product__icon-name">m2</span>
                        </div>
                    </div>
                    <div className="du-card-product__link">
                        <a href={this.props.linkSingle}>Ver más</a>    
                    </div>    
                </div>
            </div>
        )
    }
}
