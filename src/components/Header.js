import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Menu } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
const Header = () => {
  const [open, setOpen] = useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#063970" }}>
        <Toolbar variant="dense">
          <IconButton
            onClick={(e) => setOpen(e.currentTarget)}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            open={Boolean(open)}
            anchorEl={open}
            onClose={() => setOpen(null)}
            disableAutoFocusItem
          >
            <MenuItem onClick={() => setOpen(null)}>
              <Link style={{ color: "black", textDecoration: "none" }} to="/">
                <HomeIcon />
                HomePage
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setOpen(null)}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/Tictactoe/index "
              >
                <SportsEsportsIcon />
                TicTacToe
              </Link>
            </MenuItem>
          </Menu>

          <Typography variant="h6" color="inherit" component="div">
            Sayfalar
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
