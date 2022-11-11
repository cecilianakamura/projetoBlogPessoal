import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import {toast} from 'react-toastify'

function Navbar() {

  const token = useSelector<TokenState,TokenState['tokens']>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  const dispatch = useDispatch();

  function goLogout(){
    dispatch(addToken(''));
    toast.info('Usuário deslogado',{
      position:'top-right',
      autoClose: 2000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable: false,
      theme:'dark',
      progress: undefined,
    });
    navigate('/login')
  }

  var navbarComponent;

  if (token !== ''){
    navbarComponent = <AppBar position="static">
    <Toolbar className="navbarBarra" variant="dense">
      <Box className='cursor'>
        <Typography variant="h5" color="inherit">
          Blog da Ceci
        </Typography>
      </Box>

      <Box display="flex" justifyContent="start">
        <Link to='/home' className='text-decorator-none'>
        <Box mx={1} className='cursor'>
          <Typography variant="h6">
            home
          </Typography>
        </Box>
        </Link>
        <Link to='/postagens' className='text-decorator-none'>
        <Box mx={1} className='cursor'>
          <Typography variant="h6">
            postagens
          </Typography>
        </Box>
        </Link>
        <Link to='/temas' className='text-decorator-none'>
        <Box mx={1} className='cursor'>
          <Typography variant="h6">
            temas
          </Typography>
        </Box>
        </Link>
        <Link to='/formularioTema' className='text-decorator-none'>
        <Box mx={1} className='cursor'>
          <Typography variant="h6">
            cadastrar tema
          </Typography>
        </Box>
        </Link>

           <Box mx={1} className='cursor' onClick={goLogout}>
                 <Typography variant="h6" >
                   logout
                 </Typography>
              </Box>

        
      </Box>
    </Toolbar>
  </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
