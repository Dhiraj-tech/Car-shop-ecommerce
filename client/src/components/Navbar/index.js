import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {handleLogout} from '../../redux/reducerSlices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { deepOrange } from '@mui/material/colors';
import { useRouter } from 'next/router'

const pages  = ["Home", "About Us", "Contact Us", "Categories"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isLoggedIn } = useSelector((state) => state.user);
  const router = useRouter()
  const {userDetails} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const displayName = ()=> {
    const {name} = userDetails
    const nameArr =name.split(' ')
    return nameArr[0][0] + nameArr[nameArr.length-1][0]
  }
  const [open, setOpen] = React.useState(false);

  const handleClose = ()=> {
    setOpen(false)
  }   

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      // backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    fontFamily: 'monospace',
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      fontFamily: 'monospace',
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'monospace'
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
        fontFamily: 'monospace',
        "& .MuiInputBase-input": {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create("width"),
          width: "100%",
          [theme.breakpoints.up("sm")]: {
            width: "15rem",
            fontSize:13,
            "&:focus": {
              width: "25rem",
            },
          },
        },
      }));


if (isLoggedIn) {
  return (
    <AppBar position="static">
      <Container className='contain-nav' maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CARSHOP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },fontFamily: 'monospace' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                fontFamily: 'monospace'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
            CARSHOP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },fontFamily: 'monospace' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' , fontSize: 12, fontFamily: 'monospace'}}
              >
                {page}
              </Button>
            ))}
            
          </Box>
          <Box sx={{display: { xs: 'flex', lg:'flex', md: 'none' },fontFamily: 'monospace' }}>
            <Search
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              backgroundColor: 'white',
              color: 'black',
              display: { xs: 'flex', lg:'flex', md: 'none' }
            }}
            >
              <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" },fontFamily: 'monospace' }}>
              <IconButton
                 size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                 <ShoppingCartIcon />
               </Badge>
              </IconButton>
              <IconButton
                size="large"
                 aria-label="show 17 new notifications"
                 color="inherit"
              ></IconButton>
          </Box> 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>{displayName()}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem onClick={()=> router.push('/profile')}
                sx={{
                  mr: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  textDecoration: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: 11
                }}
                >Profile</MenuItem>
                <MenuItem onClick={handleClose}
                sx={{
                  mr: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  textDecoration: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: 11
                }}
                >Settings</MenuItem>
                <MenuItem onClick={()=>dispatch(handleLogout())}
                sx={{
                  mr: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  textDecoration: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: 11
                }}
                >Logout</MenuItem>
                
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
  }else{
    return (
      <>
      <AppBar position="static">
        <Container className='contain-nav' maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h3"
              noWrap
              component="a"
              sx={{
                mr: 25,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CARSHOP
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },fontFamily: 'monospace' ,      
          }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
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
                  display: { xs: 'block', md: 'none'},
                  fontFamily: 'monospace'
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
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
              CARSHOP
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },fontFamily: 'monospace' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: 12,fontFamily: 'monospace' }}
                >
                  {page}
                </Button>
              ))}

            </Box>
            <Box sx={{display: { xs: 'flex', lg:'flex', md: 'none' } ,fontFamily: 'monospace'}}>
              <Search
              sx={{
                mr: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                backgroundColor: 'white',
                color: 'black',
                display: { xs: 'flex', lg:'flex', md: 'none' }
              }}>
                <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}

                />
              </Search>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, fontFamily: 'monospace' }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="error">
                   <ShoppingCartIcon />
                 </Badge>
                </IconButton>
                <IconButton
                  size="large"
                   aria-label="show 17 new notifications"
                   color="inherit"
                ></IconButton>
            </Box> 
            <Button href="/login"
            sx={{
              mr: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              textDecoration: 'none',
              color: 'black',
              fontSize: 11,
              backgroundColor: 'white',
              "&:hover": {
                backgroundColor: 'purple',
                color:'white',
            },
            }}
            >LOGIN</Button>
            <Button href="/register"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              textDecoration: 'none',
              color: 'black',
              fontSize: 11,
              backgroundColor: 'white',
              "&:hover": {
                backgroundColor: 'purple',
                color:'white',
              },
            }}
            >SIGNUP</Button>
            
          </Toolbar>
        </Container>
      </AppBar>


      
    </>
    );
  }
}
export default ResponsiveAppBar;