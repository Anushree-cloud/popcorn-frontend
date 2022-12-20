import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { blue, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
// import { useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";


const theme = createTheme({
    palette: {
      primary: {
        main: blue[900],
      },
      secondary: {
        // This is green.A700 as hex.
        main: purple[500],
      },
    },
  });



const settings = ["Profile", "Account", "Logout"];

function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [listOpen, setListOpen] = React.useState(true);

  const handleOpenSubList = () => {
    setListOpen(!listOpen);
  };

//   const router = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex", height: '8vh' }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar component="nav" color="primary" >
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography sx={{ flexGrow: 1 }}></Typography>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar>A</Avatar>
                </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    style={{width: '150px !important'}}
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            </Toolbar>
        </AppBar>
      </ThemeProvider>
{/*--------------------------------------------- Sidebar --------------------------------------------  */}      
      <Box component="nav">
        <Sidebar 
            handleDrawerToggle={handleDrawerToggle}
            handleOpenSubList={handleOpenSubList}
            listOpen={listOpen}
            mobileOpen={mobileOpen}
        />
      </Box>
{/*--------------------------------------------------------------------------------------------------- */}
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
