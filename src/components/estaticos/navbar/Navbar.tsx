import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar'

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
          width: '20ch',
        },
      },
    },
  }));

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "dark",
      progress: undefined,
    });
    navigate("/login");
  }

  const drawerWidth = 240;

  const Main = styled('main', {shouldForwardProp: (prop) => prop !=='open'}) <{
    open?: boolean;
  }>(({theme,open})=>({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition:theme.transitions.create('margin',{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft:`-${drawerWidth}px`,
    ... (open && {
      transition:theme.transitions.create('margin',{
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft:0,
  })
}))

  interface AppBarProps extends MuiAppBarProps{
    open?: boolean;
  }

  const AppBar = styled(MuiAppBar,{
    shouldForwardProp: (prop) => prop !=='open',
  })<AppBarProps>(({theme,open}) => ({
    transition:theme.transitions.create(['margin', 'width'],{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width:`calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition:theme.transitions.create(['margin','width'],{
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
  })
  }))

  const DrawHeader = styled(`div`)(({theme}) =>({
    display:'flex',
    alignItems:'center',
    padding: theme.spacing(0,1),
    ...theme.mixins.toolbar,
    justifyContent:'flex-end',
  }))

  var navbarComponent;

  if (token !== "") {
    navbarComponent = (
      <AppBar position="static">
        <Toolbar className="navbarBarra" variant="dense">
          <IconButton
            aria-label="menu"
            size="large"
            edge="start"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" align='left'>
            Blog da Ceci
          </Typography>
          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6">home</Typography>
              </Box>
            </Link>
            <Link to="/postagens" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6">postagens</Typography>
              </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6">temas</Typography>
              </Box>
            </Link>
            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6">cadastrar tema</Typography>
              </Box>
            </Link>

            <Box mx={1} className="cursor" onClick={goLogout}>
              <Typography variant="h6">logout</Typography>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
