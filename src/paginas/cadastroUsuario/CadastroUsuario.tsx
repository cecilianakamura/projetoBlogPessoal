/* eslint-disable react/jsx-no-target-blank */
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";

function CadastroUsuario() {
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
          <form>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              className="cadastrousuarioTextoBox2"
            >
              Crie sua conta
            </Typography>
            <TextField
              id="nome"
              label="Nome completo"
              variant="outlined"
              name="nome"
              margin="dense"
            />
            <TextField
              id="usuario"
              label="Usuário (e-mail)"
              variant="outlined"
              name="usuario"
              margin="dense"
            />
            <TextField
              id="foto"
              label="URL da foto"
              variant="outlined"
              name="foto"
              margin="dense"
            />
            <TextField
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="dense"
              type="password"
              
            />
            <TextField
              id="confirmarsenha"
              label="Confirmar senha"
              variant="outlined"
              name="confirmarsenha"
              margin="dense"
              type="password"
              
            />
            <Box>
              <Link to="/home" className="text-decorator-none">
                <Button type="submit" variant="contained" className="cadastrousuariobotao">
                  Criar conta
                </Button>
              </Link>
            </Box>
          </form>
            </Box>
         Já tem uma conta? Faça seu login <Link to='/login' className='text-decorator-none'>aqui.</Link> 
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
