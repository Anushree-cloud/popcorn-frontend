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
        mobileOpen,
        currentUser
    } = props

    const router = useNavigate()

    const [selectedIndex, setSelectedIndex] = React.useState('')

    const handleOpenSubList = (itemId) => {
        selectedIndex !== itemId ?
            handleSetIndex(itemId) : handleUnsetIndex()
    };

    const handleSetIndex = (index) => setSelectedIndex(index)

    const handleUnsetIndex = () => setSelectedIndex('')

    const onOpeningModelPages = (path) => router(path)

    const setOnClickOnChildExistence = (path = undefined, id) => {
        !path ? handleOpenSubList(id) : onOpeningModelPages(path)
    }


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
                {currentUser.first_name} {currentUser.lastName}
            </Typography>
            <Typography variant="caption" fontSize={15}>
                {currentUser.email}
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
                                    onClick = {() => setOnClickOnChildExistence(item?.path, item.id)}
                                >
                                    <ListItemIcon> {item.icon} </ListItemIcon>
                                    <ListItemText  primary={item.name} />
                                    {item?.children && 
                                        <ListItemIcon>
                                            {(selectedIndex !== item.id)? <ExpandMore /> : <ExpandLess />} 
                                        </ListItemIcon>
                                    }
                                    
                                </ListItemButton>
                            </ListItem>

                            { item?.children && 
                                <>
                                    
                                    <Collapse in={selectedIndex === item.id} timeout="auto" unmountOnExit>
                                        <List sx={{marginLeft:'50px'}}>
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

    // const container =
    // window !== undefined ? () => window().document.body : undefined;

    return(
        <Drawer
        //   container={container}
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
              backgroundColor:'#f2f2f2'
            },
          }}
        >
          {drawer}
        </Drawer>
    )
};