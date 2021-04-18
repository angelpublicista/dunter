import React, { Component } from 'react';
import "./Header.sass";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

class HeaderUserGuest extends Component {
    render() {
        return (
            <div className="du-header user-guest">
                <Container maxWidth="lg">
                    <Grid container spacing={3} direction="row" alignItems="center" justify="space-between">
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
                                        <Button className="du-button-icon" color="secondary">
                                            <AccountCircleIcon fontSize="small" />
                                            Identificarme
                                        </Button>
                                    </li>

                                    <li className="du-header__menu__button">
                                        <Button className="du-button-icon" variant="contained" color="primary">
                                            <PersonAddIcon fontSize="small" />
                                            Registrarme
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

export default HeaderUserGuest;
