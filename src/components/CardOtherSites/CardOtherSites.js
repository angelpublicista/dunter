import React, { Component } from 'react';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import './CardOtherSites.sass';

class CardOtherSites extends Component {
    render() {
        return (
            <div className="du-card-sites">
                <figure>
                    <div className="du-card-sites__img">
                        <img src="https://picsum.photos/1920/1080"></img>
                        <div className="du-card-sites__img__zoom">
                            <a href="#">
                                <ZoomInIcon fontSize="large" />
                            </a>
                        </div>
                    </div>
                    <figcaption className="du-card-sites__cap">
                        <a href="#"><h2 className="du-card-sites__cap__title">Centro Comercial Dunter</h2></a>
                        <span className="du-card-sites__cap__dist">Distancia: 200mts</span>
                    </figcaption>
                </figure>  
            </div>
        );
    }
}

export default CardOtherSites;
