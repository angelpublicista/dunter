import React, { Component } from 'react';
import ImgBanner from './img/image-banner-service.jpg';
import ArrowBanner from './img/arrow-cat.svg';
import './BannerService.sass';

class BannerService extends Component {
    render(props) {
        return (
            <a href={this.props.link} target={this.props.target} className={this.props.style + " du-banner-service style-2"}>
                <figure>
                    <img src={this.props.imgBg} className="du-banner-service__cover"></img>
                    <figcaption>
                        <div className="du-circle-bg">
                            {this.props.iconSvg}
                        </div>
                        <div className="du-banner-service__figcaption-info">
                            <h2 className="du-banner-service__figcaption-info__title">{this.props.title}</h2>
                            <h3 className="du-banner-service__figcaption-info__subtitle">GRATIS</h3>
                            <img src={ArrowBanner} className="du-banner-service__figcaption-info__arrow"></img>
                        </div>
                    </figcaption>
                </figure>
            </a>
        );
    }
}

export default BannerService;
