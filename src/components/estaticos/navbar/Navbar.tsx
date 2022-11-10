import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";

function Navbar() {

  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  function goLogout(){
    setToken('')
    alert("Usuário deslogado")
    navigate('/login')
  }


  return (
    <>
      <AppBar position="static">
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
    </>
  );
}

export default Navbar;
