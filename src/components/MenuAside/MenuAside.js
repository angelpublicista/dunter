import React, { Component } from "react";
import "./MenuAside.sass";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import StarsIcon from '@material-ui/icons/Stars';
import BuildIcon from '@material-ui/icons/Build';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from "@material-ui/core/Typography";
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PublishIcon from '@material-ui/icons/Publish';
import Button from '@material-ui/core/Button';

class MenuAside extends Component {
  render() {
    return (
      <aside className="du-menu-aside">
        <div className="du-menu-aside__top-bar">
            <div className="du-menu-aside__top-bar__logo">
                <h2>DUNTER</h2>
            </div>
            <div className="du-menu-aside__top-bar__plan">
                <p>Plan básico</p>
            </div>
        </div>
        <MenuList className="du-menu-aside__list">
          <MenuItem className="active">
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Vista general</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <HomeWorkIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">
              Mis publicaciones
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <StarsIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Comentarios
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <BuildIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Herramientas
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Configuración
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Mi perfil
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Salir
            </Typography>
          </MenuItem>
          <Button variant="contained" color="primary" className="du-update-plan">
                <PublishIcon fontSize="small" />
                <Typography>
                    Cambiar mi plan
                </Typography>
           </Button>
        </MenuList>
      </aside>
    );
  }
}

export default MenuAside;
