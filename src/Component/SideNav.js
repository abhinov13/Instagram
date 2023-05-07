import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import Box from '@mui/material/Box';


const SideNav = ((props) => {
    const drawElement = (
        <div>
            <Toolbar>
                <img src="instagram.png" height="100px" width="200px"/>
            </Toolbar>
            <Divider />
            <List>
                {
                    [
                        { v_icon: 'home.svg', desc: 'Home' },
                        { v_icon: 'search.svg', desc: 'Search' },
                        { v_icon: 'navigate.svg', desc: 'Explore' },
                        { v_icon: 'reels.svg', desc: 'Reels' },
                        { v_icon: 'messenger.svg', desc: 'Messages' },
                        { v_icon: 'notifications.svg', desc: 'Notifications' },
                        { v_icon: 'create.svg', desc: 'Create' },
                        { v_icon: 'user.svg', desc: 'Profile' }
                    ].map((v_button) => (
                    <ListItem key={v_button.desc} disablePadding>
                        <ListItemButton>
                            {<ListItemIcon>
                                <img src={v_button.v_icon} alt="Img" />
                            </ListItemIcon>}
                            <ListItemText primary={v_button.desc} />
                        </ListItemButton>
                    </ListItem>
                    ))
                }
            </List>
        </div>
    );
    return (
        <>
            <Box component='nav' sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}>
                <Drawer variant="permanent" sx={{
                    display: { xs: 'block', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
                }} 
                open>
                    {drawElement}
                </Drawer>
            </Box>
        </>
    )
}
);

export default SideNav;

