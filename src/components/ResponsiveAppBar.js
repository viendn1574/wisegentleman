'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './ResonsiveAppBar.css'

import { useRouter } from 'next/navigation'
const pages = ['QUẦN SỊP', 'CHÚNG TÔI', 'TIN TỨC'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const router = useRouter()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    switch (page.target.innerText) {
      case 'QUẦN SỊP':
        router.push(`/quan-sip`);
        break;
      case 'CHÚNG TÔI':
        router.push(`/about`);
        break;
      case 'TIN TỨC':
        router.push(`/tin-tuc`);
        break;
      default:
        // Default case, handle if the page is not found
        break;
    }
    
  };


  return (
    <AppBar position="static" elevation={0}  sx={{ backgroundColor: 'white'}} >
      <div>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },  boxShadow: 0,}}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                marginLeft:'-16px'
              }}
              elevation={0}
            >
              {pages.map((page) => (
                <MenuItem key={page}  onClick={() => handleMenuItemClick(page)}>
                  <Typography textAlign="center" fontFamily={'Times New Roman, Times, serif'}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
                <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="https://wisegentleman.vn"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src="https://wisegentleman.vn/WG.png" className="d-inline-block logo" alt="Wise Gentleman Logo"/>   
          </Typography>

          {/*KICH THUOC LON */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'Times New Roman, Times, serif' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          </Box>
        </Toolbar>
      </div>
    </AppBar>
  );
}
export default ResponsiveAppBar;