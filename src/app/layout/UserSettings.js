import { Call, ExitToApp, Info, Portrait } from '@mui/icons-material';
import { Avatar, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React from 'react'

function UserSettings({currentUser}) {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        handleCloseUserMenu()
    }

    return (
        <>
            <Tooltip title="User Settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar>{currentUser.first_name.charAt(0)}</Avatar>
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
                <MenuItem key={1} onClick={handleLogout}>
                    <ListItemIcon><Call /></ListItemIcon>
                    <ListItemText primary={'Contact Us'} />
                </MenuItem>
                <MenuItem key={1} onClick={handleLogout}>
                    <ListItemIcon><Info /></ListItemIcon>
                    <ListItemText primary={'About'} />
                </MenuItem>
                <Divider />
                <MenuItem key={2} onClick={handleCloseUserMenu}>
                    <ListItemIcon><Portrait /></ListItemIcon>
                    <ListItemText primary={'My Profile'} />
                </MenuItem>
                <MenuItem key={1} onClick={handleLogout}>
                    <ListItemIcon><ExitToApp /></ListItemIcon>
                    <ListItemText primary={'Logout'} />
                </MenuItem>
            </Menu>
        </>
    )
}

export default UserSettings
