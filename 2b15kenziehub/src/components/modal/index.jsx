import { Container, Button, TextField, CssBaseline, 
    Box, Typography, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio} from "@mui/material"
import { useState } from 'react'
import { LockOutlined } from "@material-ui/icons"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { toast } from 'react-hot-toast'
import api from '../../services/api'

const Modal = () => {

    const [inputValue, setInputValue] = useState("Iniciante")

    const schema = yup.object().shape({
        tech: yup.string().required('Informe a tech que deseja adicionar')
    })

    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

      function handleInput(evt){
        setInputValue(evt.target.value)
      }
      const handleSignIn = ( {tech, status} ) => {
        const user = {tech, status}
        api
        .post('/users/techs', user)
        .then(response => {
            const {token, user} = response.data

            toast.success("Tech adicionada com sucesso!")
            
        })
        .catch((err) => toast.error('E-mail ou senha inválidos'))
    }
    const handleClick = () => {
        history.push('/cadastro')
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Box 
                component='form' 
                sx={{ mt: 1, border: '1px solid #F5F5F5'}} 
                onSubmit={handleSubmit(handleSignIn)}
                >
            
                <TextField 
                {...register("tech")}
                id="outlined-basic" 
                fullWidth 
                label='Tech' 
                sx={{ mt:2, background: '#F5F5F5', color: '#999999' }}
                helperText={errors.tech?.message}
                error={!!errors.tech?.message}
                />
            </Box>

            <RadioGroup 
            value = {inputValue}
            row aria-label="status" 
            onChange={(evt) => handleInput(evt)}
            >

                <FormControlLabel 
                {...register("status")}
                value="Iniciante" 
                control={<Radio />} 
                label="Iniciante" 
                
                />
                <FormControlLabel
                {...register("status")} 
                value="Intermediário" 
                control={<Radio />} 
                label="Intermediário" 
                />

                <FormControlLabel
                {...register("status")} 
                value="Avançado" 
                control={<Radio />} 
                label="Avançado" />
            </RadioGroup>
        </Container>
    )
}
export default Modal