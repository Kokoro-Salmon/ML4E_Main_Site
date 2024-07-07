import React, { useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
  typography: {
    fontFamily: 'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  },
});

function LandingHeader({ scrollToSection }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: 'black',
        color: 'white',
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("project")}>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("about")}>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("resources")}>
            <ListItemText primary="Research" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("contact")}>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: 'black', color: 'white' }}>
        <Toolbar>
          {/* Logo */}
          <IconButton edge="start" color="inherit" aria-label="logo">
            <Image
              src="/ML4E.png"
              width={63.56}
              height={63.48}
              alt="ML4Everyone Logo"
            />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            ML4Everyone
          </Typography>
          {/* Navigation Links */}
          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{
                  '& .MuiDrawer-paper': {
                    bgcolor: 'black',
                    color: 'white',
                  },
                }}
                transitionDuration={{ enter: 500, exit: 500 }}
                ModalProps={{ keepMounted: true }}
              >
                <Slide direction="down" in={drawerOpen} mountOnEnter unmountOnExit>
                  {drawer}
                </Slide>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button color="inherit" onClick={() => scrollToSection("project")}>
                Projects
              </Button>
              <Button color="inherit" onClick={() => scrollToSection("about")}>
                About Us
              </Button>
              <Button color="inherit" onClick={() => scrollToSection("resources")}>
                Resources
              </Button>
              <Button color="inherit" onClick={() => scrollToSection("contact")}>
                Contact Us
              </Button>
            </Box>
          )}
          {/* Secondary Logo */}
          <IconButton edge="end" color="inherit" aria-label="secondary logo">
            <Image
              src="/nit rkl black.png"
              alt="NITR Logo"
              width={61.29}
              height={64.44}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default LandingHeader;
