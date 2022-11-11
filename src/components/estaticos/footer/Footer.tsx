import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Box, Grid } from '@material-ui/core';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState,TokenState['tokens']>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token!==''){
         footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
         <Grid alignItems="center" item xs={12}>
             <Box className='box1'>
                 <Box display="flex" alignItems="center" justifyContent="center">
                     <a href="https://github.com/cecilianakamura" target="_blank">
                         <GitHubIcon className='redes'/>
                     </a>
                     <a href="https://www.linkedin.com/in/cecilianakamura/" target="_blank">
                         <LinkedInIcon className='redes' />
                     </a>
                 </Box>
             </Box>
         </Grid>
     </Grid>
    }
    
    return (
        <>
        {footerComponent}
        </>
    )
}

export default Footer;