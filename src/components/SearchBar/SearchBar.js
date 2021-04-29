import React, { Component } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconBtnSubmit from "./img/house-searcher.svg";
import "./SearchBar.sass";

class SearchBar extends Component {
  render() {
    return (
      <div className="du-search-bar">
        <form className="du-search-bar__form">
          <div className="du-form-group du-custom-select">
            <div className="custom-select open">
                <div className="custom-select__trigger"><span>Tipo de inmueble</span>
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

          <div className="du-form-group du-custom-select">
            <div className="custom-select">
                <div className="custom-select__trigger"><span>Estado</span>
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

          <div className="du-form-group du-custom-text">
            <input type="text" className="custom-text" placeholder="Ubicación"></input>
          </div>

          <button className="du-search-bar__form__submit" type="submit">
            <img src={IconBtnSubmit}></img>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
