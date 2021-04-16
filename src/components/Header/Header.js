import React, { Component } from 'react';
import "./Header.sass";
import Logo from "./../../img/logo-prueba.png";
import Container from "@material-ui/core/Container";


class Header extends Component {
    render(props) {
        return (
            <div className="du-header">
                <Container  maxWidth="lg">
                    <img src={Logo}></img> 
                    <h1>Dunter {this.props.title}</h1>
                </Container>
            </div>
        );
    }
}

export default Header;
