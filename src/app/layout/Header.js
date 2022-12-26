import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
// import { useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import { Campaign, NotificationsNone } from "@mui/icons-material";
import useCurrentUser from "../../hooks/useCurrentUser";
import UserSettings from "./UserSettings";


const theme = createTheme({
    palette: {
      primary: {
        main: blue[900],
      },
      secondary: {
        // This is green.A700 as hex.
        main: blue[500],
      },
      white: {
        main: '#ffffff'
      }
    },
  });

function Header(props) {

  const currentUser = useCurrentUser()
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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
{/*------------------------------------------------------ Appbar Icons -------------------------------------------------------*/}            
            <Box sx={{flexGrow: 0}}>
              <Tooltip title="Notifications">
                <IconButton>
                  <NotificationsNone fontSize="large" color="white"/>
                </IconButton>
              </Tooltip>
            </Box>

            <Box sx={{flexGrow: 0}}>
              <Tooltip title="Announcements">
                <IconButton>
                  <Campaign fontSize="large" color="white"/>
                </IconButton>
              </Tooltip>
            </Box>
{/*---------------------------------------------------------------------------------------------------------------------------*/}
            <span style={{margin:'0 5px'}}></span>
{/*----------------------------------------------------- Appbar User Icon --------------------------------------------------- */}
            <Box sx={{ flexGrow: 0, display:'flex', flexDirection:'row' }}>
                <Box sx={{display:'flex', flexDirection:'column', textAlign:'right'}}>
                  <Typography >{currentUser.first_name} {currentUser.last_name}</Typography>
                  <Typography fontSize='small'>{currentUser?.role?.display_name}</Typography>
                </Box>

                <span style={{margin:'0 5px'}}></span>

                <UserSettings currentUser={currentUser}/>
                
            </Box>
{/*---------------------------------------------------------------------------------------------------------------------------*/}

            </Toolbar>
        </AppBar>
      </ThemeProvider>
{/*--------------------------------------------- Sidebar --------------------------------------------  */}      
      <Box component="nav">
        <Sidebar 
            handleDrawerToggle={handleDrawerToggle}
            // handleOpenSubList={handleOpenSubList}
            // listOpen={listOpen}
            currentUser = {currentUser}
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
