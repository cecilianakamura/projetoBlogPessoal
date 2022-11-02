import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
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
            <Box mx={1} className='cursor'>
              <Typography variant="h6">
                home
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6">
                postagens
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6">
                temas
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6">
                cadastrar tema
              </Typography>
            </Box>

            <Link to='login' className='text-decorator-none'>
               <Box mx={1} className='cursor'>
                     <Typography variant="h6" >
                       logout
                     </Typography>
                  </Box>
            </Link>
            
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
