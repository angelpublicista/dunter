import React, { Component } from 'react';
import RoomIcon from '@material-ui/icons/Room';
import './ListOtherSites.sass';

class ListOtherSites extends Component {
    render(props) {
        return (
            <ul className="du-list-sites">
                <li className="du-list-sites__item">
                    <a href="#" className="du-list-sites__link">
                        <RoomIcon fontSize="small" />
                        <h2 className="du-list-sites__item__title">Centro Comercial Dunter</h2>
                    </a>
                    <span className="du-list-sites__item__dist">Distancia: 200mts</span>
                </li>

                <li className="du-list-sites__item">
                    <a href="#" className="du-list-sites__link">
                        <RoomIcon fontSize="small" />
                        <h2 className="du-list-sites__item__title">Centro Comercial Dunter</h2>
                    </a>
                    <span className="du-list-sites__item__dist">Distancia: 200mts</span>
                </li>
            </ul>
        );
    }
}

export default ListOtherSites;
