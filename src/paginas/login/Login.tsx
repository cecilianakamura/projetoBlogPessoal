import { Button, Grid, Typography } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom';
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import React, {ChangeEvent, useState, useEffect} from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";


function Login (){
  let navigate = useNavigate();
  
  const dispatch = useDispatch();
  const [token, setToken] = useState('')

  const [userLogin, setUserLogin] = useState<UserLogin> ({
    id:0,
    nome:'',
    usuario:'',
    foto:'',
    senha:'',
    token:''

  })

  function updateModel(event: ChangeEvent<HTMLInputElement>){
    
    setUserLogin({
      ...userLogin,
      [event.target.name]:event.target.value
    })
  }

    useEffect(()=>{
      if(token != ''){
        dispatch(addToken(token));
        navigate('/home')
      }
    })
  //envio das informações
  async function onSubmit(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault();
    try {
      await login('/usuarios/logar',userLogin, setToken)

      toast.success("Usuário logado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados do usuário inconsistentes. Erro ao autenticar.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });
    }
  }

    return(
    <Grid container className="loginPagina">
    <Box className="loginBox">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" gutterBottom align="center">
          Login
        </Typography>

        <TextField 
        onChange={(event: ChangeEvent<HTMLInputElement>)=> updateModel(event)}
        value={userLogin.usuario}
        label="Usuário (e-mail)" name="usuario" />

        <TextField 
        onChange={(event: ChangeEvent<HTMLInputElement>)=>updateModel(event)}
        value={userLogin.senha}
        label="Senha" name="senha" type="password" />

        <Box >
          <Button type="submit" variant="outlined" className="loginBotaoEntrar">
              Entrar
          </Button>
        </Box>
      </form>

      <Typography>Não tem uma conta? Cadastre-se <Link to='/cadastrousuario' >aqui!</Link></Typography>
    </Box>
    <Box className="loginCredito">
        Pixel art feita por{" "}
        <a
          href="https://www.reddit.com/r/PixelArt/comments/qki8je/gaming_room_pixel_art/"
          target="_blank" className="text-decorator-none"
        >
          /u/Eiskalter16
        </a>
        </Box>
  </Grid>
);
};

export default Login;