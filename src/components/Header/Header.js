import React, { Component } from 'react';
import "./Header.sass";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Header extends Component {
    render(props) {
        return (
            <div className="du-header user-logued">
                <Container maxWidth="lg">
                    <Grid container spacing={5} direction="row" alignItems="center" justify="space-between">
                        <Grid item xs={12} lg={2}>
                            <a href="#" className="du-header__link-logo">
                                <h2>DUNTER</h2>
                            </a>
                        </Grid>
                        <Grid item xs={12} lg={10}>
                            <nav>
                                <ul className="du-header__menu">
                                    <li className="du-header__menu__item">
                                        <a href="#">Item</a>
                                    </li>

                                    <li className="du-header__menu__item">
                                        <a href="#">Item lorem</a>
                                    </li>

                                    <li className="du-header__menu__item">
                                        <a href="#">Item</a>
                                    </li>

                                    <li className="du-header__menu__item">
                                        <a href="#">Item</a>
                                    </li>

                                    <li className="du-header__menu__item">
                                        <a href="#">Item</a>
                                    </li>

                                    <li className="du-header__menu__button">
                                        <Button className="du-button-icon" variant="contained" color="secondary">
                                            <AccountCircleIcon fontSize="small" />
                                            Mi perfil
                                        </Button>
                                    </li>

                                    <li className="du-header__menu__button">
                                        <Button className="du-button-icon" variant="contained" color="primary">
                                            <AddCircleIcon fontSize="small" />
                                            Publicar inmueble
                                        </Button>
                                    </li>
                                </ul>
                            </nav>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Header;
