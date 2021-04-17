import React, { Component } from 'react';
import ShareIcon from '@material-ui/icons/Share';
import './CardContact.sass';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import EmailIcon from '@material-ui/icons/Email';


class CardContact extends Component {
    render(props) {
        return (
            <div className="du-card-contact">
                <div className="du-card-contact__top-bar">
                    <p>¿TE INTERESA ESTE INMUEBLE?</p>
                    <span className="du-divider-vertical">|</span>
                    <button className="du-card-contact__top-bar__share">
                        <ShareIcon />
                    </button>
                </div>

                <div className="du-card-contact__body">
                    <img src={this.props.imgProfile} className="du-card-contact__body__avatar"></img>
                    <p className="du-card-contact__body__name">{this.props.asesorName}</p>
                    <p className="du-card-contact__body__position">{this.props.asesorPosition}</p>
                    
                    <Button className="du-btn du-btn-wp du-button-icon" variant="contained" href={this.props.linkWp} target="_blank">
                        <WhatsAppIcon />
                        Enviar un mensaje
                    </Button>

                    <Button className="du-btn du-button-icon" variant="contained" color="secondary" href={this.props.linkPhone} target="_blank">
                        <PhonelinkRingIcon />
                        Hacer una llamada
                    </Button>

                    <Button className="du-btn du-button-icon" variant="contained" color="primary" href={this.props.linkMail} target="_blank">
                        <EmailIcon />
                        Enviar un correo
                    </Button>
                </div>
            </div>
        );
    }
}

export default CardContact;
