import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    useEffect(()=> {
        if(token==''){
            toast.error('Você precisa estar logado!',{
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
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>aqui organizo minhas divagações e projetos!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/posts' className='text-decorator-none'>
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/CuaTqtJ.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;