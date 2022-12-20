import React from "react";
import { Box, Avatar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse, Drawer } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

import { useNavigate } from "react-router-dom";

import { navItemsMain } from '../../config/NavbarConfig'

const drawerWidth = 300; 

export default function Sidebar (props) {

    let { 
        handleDrawerToggle,
        handleOpenSubList,
        listOpen,
        mobileOpen
    } = props

    const router = useNavigate()

    const onOpeningModelPages = (path) => router(path)

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <Avatar sx={{ bgcolor: blue[900], my: 2.5, mx: 1, fontWeight: 'Bolder', fontSize: 40 }} variant="rounded">
                    P
                </Avatar>
                <Typography variant="h6" sx={{ my: 3, fontWeight: 'Bolder', color: blue[900] }}>
                    POPCORN
                </Typography>
            </div>
            <Typography variant="h5">
                Test User
            </Typography>
            <Typography variant="caption" fontSize={15}>
                test.user@gmail.com
            </Typography>
            <Typography sx={{my:2}} />
            <Divider />
            <List>
                {navItemsMain.map((item) => {
                    return (
                        <>
                            <ListItem key={item.id} disablePadding sx={{ display:'block' }}>
                                <ListItemButton 
                                    sx={{ textAlign: "left" }}
                                    // onClick={ !item.path ? handleOpenSubList : onOpeningModelPages(item.path) }
                                    onClick = {!item.path ? handleOpenSubList : () => onOpeningModelPages(item.path)}
                                >
                                    <ListItemIcon> {item.icon} </ListItemIcon>
                                    <ListItemText  primary={item.name} />
                                    <ListItemIcon>
                                        {item?.children && (listOpen? <ExpandMore /> : <ExpandLess />) }
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                            { item?.children && 
                                <>
                                    
                                    <Collapse in={!listOpen} timeout="auto" unmountOnExit>
                                        <List>
                                            {item?.children.map(childItem => {
                                                return (
                                                    <ListItem key={childItem.id} disablePadding sx={{ display:'block' }}>
                                                        <ListItemButton 
                                                            sx={{ textAlign: "left" }}
                                                            onClick={() => router(childItem.path)}>
                                                            <ListItemIcon> {childItem.icon} </ListItemIcon>
                                                            <ListItemText  primary={childItem.name} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                )
                                            })}
                                        </List>
                                    </Collapse>
                                </>
                            }
                        </>
                    )})}
            </List>
        </Box>
    )

    const container =
    window !== undefined ? () => window().document.body : undefined;

    return(
        <Drawer
          container={container}
          variant="permanent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
    )
};