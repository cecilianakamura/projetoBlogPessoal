import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Menu,
} from "@material-ui/core";
import "./CadastroPost.css";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import useLocalStorage from "react-use-localstorage";
import Postagem from "../../../models/Postagem";
import { busca, buscaId, post, put } from "../../../services/Service";

function CadastroPost() {
  const [temas, setTemas] = useState<Tema[]>([]);
  
  const [token, setToken] = useLocalStorage("token");

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  })

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    data: "",
    titulo: "",
    texto: "",
    tema: null,
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [event.target.name]: event.target.value,
      tema: tema
    });
  }

  async function buscaTemas() {
    await busca("/temas/all", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function cadastrarPostagem(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault()
    await post('/postagens', postagem, setPostagem,{
        headers:{
            Authorization: token
        }
    })
    alert('Postagem cadastrada com sucesso!')
}

  useEffect(() => {
    buscaTemas();
  }, [temas.length]);

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={cadastrarPostagem}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro postagem
        </Typography>
        <TextField
          id="titulo"
          value={postagem.titulo}
          onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
          label="Título"
          variant="outlined"
          name="titulo"
          margin="normal"
          fullWidth
        />
        <TextField
          id="texto"
          value={postagem.texto}
          onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
          label="Texto"
          name="texto"
          variant="outlined"
          margin="normal"
          placeholder="Máximo 1000 caracteres"
          multiline
          minRows={4}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="temaSelect">Tema </InputLabel>
          <Select labelId="temaSelect" id='tema' onChange={(e)=>buscaId(`/temas/${e.target.value}`, setTema, {
            headers:{
                Authorization: token
            }
          })}>

            {temas.map((temas) => (
              <MenuItem value={temas.id}>{temas.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPost;
