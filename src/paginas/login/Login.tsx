import { Button, Grid, Typography } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom';
import UserLogin from "../../model/UserLogin";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../service/service";
import React, {ChangeEvent, useState, useEffect} from "react";
import "./Login.css";


function Login (){
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UserLogin> ({
    id:0,
    nome:'',
    usuario:'',
    foto:'',
    senha:'',
    token:''

  })

  function updateModel(e: ChangeEvent<HTMLInputElement>){
    
    setUserLogin({
      ...userLogin,
      [e.target.name]:e.target.value
    })
  }

    useEffect(()=>{
      if(token != ''){
        navigate('/home')
      }
    })
  //envio das informações
  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try {
      await login('/usuarios/logar',userLogin, setToken)

      alert('Usuário logado com sucesso!');
    } catch (error) {
      alert('Dados do usuário inconsistentes. Erro ao autenticar!');
    }
  }

    return(
    <Grid container className="loginPagina">
    <Box className="card">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" gutterBottom align="center">
          Login
        </Typography>

        <TextField 
        onChange={(e: ChangeEvent<HTMLInputElement>)=> updateModel(e)}
        value={userLogin.usuario}
        label="Usuário (e-mail)" name="usuario" />

        <TextField 
        onChange={(e: ChangeEvent<HTMLInputElement>)=>updateModel(e)}
        value={userLogin.senha}
        label="Senha" name="senha" type="password" />

        <Box className="loginBotaoEntrar">
          <Button type="submit" variant="outlined">
              Entrar
          </Button>
        </Box>
      </form>

      <Typography>Não tem uma conta? Cadastre-se <Link to='/cadastrousuario' >aqui!</Link></Typography>
    </Box>
  </Grid>
);
};

export default Login;