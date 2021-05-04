import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import './Subheading.sass';

class Subheading extends Component {
    render(props) {
        return (
            <section className="du-subheading-section">
                <Container maxWidth="lg">
                    <h1>{this.props.title}</h1>
                </Container>
            </section>
        );
    }
}

export default Subheading;
