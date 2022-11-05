import { Button, Grid, Typography } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import {Link} from 'react-router-dom';
import React, { useState } from "react";
import "./Login.css";

function Login (){

  const [userLogin, setUserLogin] = useState(<UserLogin>) ({



  })

  function updateModel(event: ChangeEvent<HTMLFormElement>){
    setUserLogin({
      ...userLogin
      []
    })
  }

    return(
    <Grid container className="loginPagina">
    <Box className="card">
      <form>
        <Typography variant="h3" gutterBottom align="center">
          Login
        </Typography>
        <TextField 
        onChange={(event: ChangeEvent<HTMLInputElement>)=> updateModel(event)}
        value={userLogin.usuario}
        label="Usuário (e-mail)" name="usuario" />
        <TextField label="Senha" name="senha" type="password" />
        <Box className="loginBotaoEntrar">
          <Link to='/home' className="text-decorator-none">
          <Button type="submit" variant="outlined">
              Entrar
          </Button>
          </Link>
        </Box>
      </form>

      <Typography>Não tem uma conta? Cadastre-se <Link to='/cadastrousuario' >aqui!</Link></Typography>
    </Box>
  </Grid>
);
};

export default Login;