import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import User from "../../models/User";
import { cadastrousuario } from "../../services/Service";
import "./CadastroUsuario.css";

function CadastroUsuario() {

  let navigate = useNavigate();

  const [confirmarSenha,setConfirmarSenha] = useState<String>("");

  const [user, setUser] = useState<User>(
      {
          id: 0,
          nome: '',
          usuario: '',
          foto: '',
          senha: ''
      }
  )

  const [userResult, setUserResult] = useState<User>(
      {
          id: 0,
          nome: '',
          usuario: '',
          foto: '',
          senha: ''
      }
  )

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate('/login');
    }
  }, [userResult]);

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(event.target.value);
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {

    setUser({
        ...user,
        [event.target.name]: event.target.value
    });

  }

  async function cadastrarUsuario(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    if(confirmarSenha === user.senha && user.senha.length>=8){
      try{
        await cadastrousuario('/usuarios/cadastrar', user, setUserResult);
        toast.success("Usuário cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });
      } catch (error){
        toast.error("Falha interna ao cadastrar", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });
        console.log(error);
      }
    }else{
      toast.error("As senhas não conferem. Tente novamente.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });
      setUser({ ...user, senha:''});
      setConfirmarSenha('');
     }

  }

  return (
    <Grid
      container
      className="cadastrousuarioFundo"
    >
      <Grid item xs={6} className="cadastrousuariogrid1">
        Pixel art feita por{" "}
        <a
          href="https://www.reddit.com/r/PixelArt/comments/qki8je/gaming_room_pixel_art/"
          target="_blank" className="text-decorator-none"
        >
          /u/Eiskalter16
        </a>
      </Grid>

      <Grid item xs={6} className="cadastrousuariogrid2">
         <Box className='cadastrousuarioBox'>
          <form onSubmit={cadastrarUsuario}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              className="cadastrousuarioTextoBox2"
            >
              Crie sua conta
            </Typography>
            <TextField
              value={user.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
              id="nome"
              label="Nome completo"
              variant="outlined"
              name="nome"
              margin="dense"
            />
            <TextField
              value={user.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
              id="usuario"
              label="Usuário (e-mail)"
              variant="outlined"
              name="usuario"
              margin="dense"
            />
            <TextField
              value={user.foto}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
              id="foto"
              label="URL da foto"
              variant="outlined"
              name="foto"
              margin="dense"
            />
            <TextField
              value={user.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="dense"
              type="password"
              
            />
            <TextField
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)}
              id="confirmarsenha"
              label="Confirmar senha"
              variant="outlined"
              name="confirmarsenha"
              margin="dense"
              type="password"
              
            />
            <Box>
                <Button type="submit" variant="contained" className="cadastrousuariobotao">
                  Criar conta
                </Button>
            </Box>
          </form>
            </Box>
         Já tem uma conta? Faça seu login <Link to='/login' className='text-decorator-none'>aqui.</Link> 
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
