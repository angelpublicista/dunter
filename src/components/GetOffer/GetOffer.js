import React, { Component } from 'react';
import "./GetOffer.sass";

class GetOffer extends Component {
    render() {
        return (
            <div className="du-get-offer">
                <div className="du-form-group">
                    <input className="du-form-control" type="email" placeholder="Correo electrónico" ></input>
                    <button type="submit" className="du-btn-get">
                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.2971 4.35355C17.4923 4.15829 17.4923 3.84171 17.2971 3.64645L14.1151 0.464466C13.9198 0.269204 13.6032 0.269204 13.408 0.464466C13.2127 0.659728 13.2127 0.976311 13.408 1.17157L16.2364 4L13.408 6.82843C13.2127 7.02369 13.2127 7.34027 13.408 7.53553C13.6032 7.7308 13.9198 7.7308 14.1151 7.53553L17.2971 4.35355ZM0 4.5H16.9435V3.5H0V4.5Z" fill="white"/>
                        </svg>
                    </button>
                </div>  
            </div>
        );
    }
}

export default GetOffer;
