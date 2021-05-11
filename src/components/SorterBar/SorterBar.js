import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './SorterBar.sass';

class SorterBar extends Component {
    render() {
        return (
            <div className="du-sorter-bar">
                <div className="du-form-group du-custom-select">
                    <div className="custom-select open">
                        <div className="custom-select__trigger"><span>Ordenar por:</span>
                            <div className="arrow">
                            <ExpandMoreIcon fontSize="small" />
                            </div>
                        </div>
                        <div class="custom-options">
                            <span className="custom-option" data-value="tesla">Casa</span>
                            <span className="custom-option" data-value="volvo">Apartamento</span>
                            <span className="custom-option selected" data-value="mercedes">Lote</span>
                        </div>
                    </div>
                </div>

                <div className="du-grid-views">
                    <span className="du-grid-views__text">Vistas:</span>

                    {/* VIEW GRID ICON */}
                    <div className="du-grid-views__icon du-grid-views__grid">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="11" height="11" stroke="#F84F2F"/>
                            <rect x="0.5" y="15.5" width="11" height="11" stroke="#F84F2F"/>
                            <rect x="15.5" y="0.5" width="11" height="11" stroke="#F84F2F"/>
                            <rect x="15.5" y="15.5" width="11" height="11" stroke="#F84F2F"/>
                        </svg>
                    </div>

                    {/* VIEW LIST ICON */}
                    <div className="du-grid-views__icon du-grid-views__list">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.5H27.5M0 27H27.5M0 14.5H27.5" stroke="white" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default SorterBar;
