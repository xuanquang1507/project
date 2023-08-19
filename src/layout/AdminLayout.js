import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MENUS } from '../router/constants';
import { Link, Outlet, useNavigate, useNavigation } from 'react-router-dom';
import styles from './AdminLayout.module.css'
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const drawerWidth = 280;

export default function AdminLayout({children}) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login")
  }
  
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar className= {styles.Toolbar}>
          <Typography variant="h6" noWrap component="div" className={styles.product}>
            Product
          </Typography>
          <div>
            <ShoppingCartIcon className='mx-4'/>
            <LogoutIcon onClick={handleLogout}/>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {MENUS.map((menu, index) => (
              //<Link to={menu.path} key={menu.path}>
                <ListItem key={menu.path} disablePadding onClick={()=> navigate(menu.path)}>
                  <ListItemButton>
                    <ListItemIcon>
                      {menu.icon}
                    </ListItemIcon>
                    <ListItemText primary={menu.name} />
                  </ListItemButton>
                </ListItem>
              //</Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
