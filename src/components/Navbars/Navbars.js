import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import {alpha} from '@mui/material/styles';
import {Routes,Route,Link} from "react-router-dom";
import Jobs from '../Jobs'
import Jobs1 from '../Jobs1'
import Jobs2 from '../Jobs2'
import Jobs3 from '../Jobs3'
import Sity from '../Sity/Sity';
import './navbar.css'
import Admin from '../Admin/Admin';
import AdminAdd from '../Admin/AdminAdd';
import { SearchContext } from '../../App';


const openedMixin = (theme) => ({
  width: 170,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 170,
    width: `calc(100% - ${170}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: 170,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 'au',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing('auto'),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));
export default function Navbars(props) {
  const [activeId, setActiveId]= React.useState(0)
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {search,setSearch} = React.useContext(SearchContext)
  const onClickClear = () => {
    setSearch('');
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const category = activeId > null ? `category=${activeId}`:'';
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div">
          <Link to='/jobs0' style={{ textDecoration: 'none' ,color:'white'}}>
           Job search
          </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon className='icon' />
            </SearchIconWrapper>
            <StyledInputBase
              value={search}
              onChange={(e)=> setSearch(e.target.value) }
              placeholder="Поиск ..."
             
            />
            {search && (
              <svg
              onClick={()=>onClickClear()}
              className='input'
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
            )}
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Sity value={activeId} onclickCategory={(id)=>setActiveId(id)}/>
        <List>
            <Admin/>
        </List>
      </Drawer>


      <Container>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }} >

            <Routes>
              <Route path="/jobs0" element={<Jobs/>} />
              <Route path="/jobs1" element={<Jobs1/>} />
              <Route path="/jobs2" element={<Jobs2/>} />
              <Route path="/jobs3" element={<Jobs3/>} />
              <Route path="/addproducts" element={<AdminAdd />} />
            </Routes>

            {/* <Box component="main" >
              <Footer/>
            </Box> */}

          </Box>
      </Container>
    </Box>
   
   
  );
}
