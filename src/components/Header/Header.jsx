import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import styles from './Header.module.css'
import AccessibilitySharpIcon from '@mui/icons-material/AccessibilitySharp';


const drawerWidth = 300;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Stack className={styles.link} onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
      <a href="/">Home</a>
      <a href="/projects">Projects</a>
      <a href="/contacts">Contacts</a>
    </Stack>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', position: "fixed", zIndex: 100 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ display: 'flex', backgroundColor: "#000", }}>
        <Toolbar sx={{ display: 'flex', }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <AccessibilitySharpIcon sx={{fontSize:{sm:32, md:37},}}/>
          </Typography>
          <Box className={styles.pageName} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: "#fff", fontSize:{sm:15, md:18}, fontWeight:100 }} href="/">Home</Button>
            <Button sx={{ color: "#fff", fontSize:{sm:15, md:18}, fontWeight:100 }} href="/projects">Projects</Button>
            <Button sx={{ color: "#fff", fontSize:{sm:15, md:18}, fontWeight:100 }} href="/contacts">Contacts</Button>
       
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Header;
