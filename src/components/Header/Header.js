import React, { Component } from 'react';
import "./Header.sass";
import Logo from "./../../img/logo-prueba.png";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AccountCircle from '@material-ui/icons/AccountCircle';

class Header extends Component {
    render(props) {
        return (
            <div className="du-header">
                <Container  maxWidth="lg">
                    <img src={Logo}></img> 
                    <h1>Dunter {this.props.title}</h1>
                    <Button className="du-button-icon" variant="contained" color="secondary">
                        <AccountCircle />
                        Hola Mundo!
                    </Button>

                </Container>
            </div>
        );
    }
}

export default Header;
