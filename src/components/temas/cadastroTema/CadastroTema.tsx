import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';


function CadastroTema() {

    let navigate = useNavigate();
    const {id} = useParams<{id: string}>();
    const token = useSelector<TokenState,TokenState['tokens']>(
        (state) => state.tokens
    );
    const [tema,setTema]=useState<Tema>({
        id:0,
        descricao:'',
    })

    useEffect(()=>{
        if(token==''){
            alert('Você precisa estar logado.')
            navigate('/login')
        }
    },[token])

    useEffect(()=>{
        if(id!==undefined){
            findById(id)
        }
    },[id])

    async function findById(id:string) {
        buscaId(`/temas/${id}`, setTema,{
            headers:{
                'Authorization': token
            }
        })
    }

    function updateTema(event: ChangeEvent<HTMLInputElement>){
        setTema({
            ...tema,
            [event.target.name]: event.target.value,
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()

        if(id!==undefined){
            put(`/temas`, tema, setTema,{
                headers:{
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso.');
        }
        back()
    }

    function back(){
        navigate('/temas')
    }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastro de tema</Typography>
                <TextField value={tema.descricao} onChange={(event:ChangeEvent<HTMLInputElement>) =>updateTema(event)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;