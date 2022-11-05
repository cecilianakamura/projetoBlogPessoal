import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';


function CadastroUsuario(){
    return(
       <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item xs={6} className='cadastrousuariobox1'>
          <Box>
          <Typography variant='h3'>Bem-vinde!</Typography>
            <Typography variant='h5'> Já tem cadastro? Entre aqui!</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} className='cadastrousuariobox2' alignItems='center'>
            <Box>
                <form>
                    <Typography variant='h3' gutterBottom component='h3' align='center' className='cadastrousuarioTextoBox2'>Crie uma conta</Typography>
                    <TextField id='usuario' label='Usuário (e-mail)' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <Box>
                        <Link to='/home' className='text-decorator-none'>
                            <Button type='submit' variant='contained'>
                                Cadastrar
                            </Button>
                        </Link>
                    </Box>
                </form>
            </Box>
        </Grid>
        
       </Grid>
    );
}

export default CadastroUsuario;