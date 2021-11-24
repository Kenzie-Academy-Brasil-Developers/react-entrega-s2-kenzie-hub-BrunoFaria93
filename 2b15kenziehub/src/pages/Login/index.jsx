import { Container, Button, TextField, CssBaseline, 
    Box, Typography} from "@mui/material"
import { LockOutlined } from "@material-ui/icons"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { toast } from 'react-hot-toast'
import api from '../../services/api'

const Login = ({auth, setAuth}) => {

    const schema = yup.object().shape({
        email: yup.string().required('E-mail obrigatório'),
        password: yup.string().required('Senha obrigatória')
        
    })

    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });


      const handleSignIn = ( {email, password} ) => {
        const user = {email, password}
        api
        .post('/sessions', user)
        .then(response => {
            const {token, user} = response.data

            localStorage.setItem("@KenzieHub:token", token)
            localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

            toast.success("Login feito com sucesso!")
            history.push('/devpage')
            
        })
        .catch((err) => toast.error('E-mail ou senha inválidos'))
    }
    const handleClick = () => {
        history.push('/cadastro')
    }
    return(
    <Container component='main' maxWidth='xs'>
        {/* CssBaseline da um reset global */}
        <CssBaseline />
        <Box 
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Typography component='h1' variant='h4'>Kenzie <span className='hub'>Hub</span></Typography>
        </Box>
        <Box 
        component='form' 
        sx={{ mt: 1, border: '1px solid #F5F5F5'}} 
        onSubmit={handleSubmit(handleSignIn)}
        >
            
            <TextField 
            {...register("email")}
            id="outlined-basic" 
            fullWidth 
            label='E-mail' 
            sx={{ mt:2, background: '#F5F5F5', color: '#999999' }}
            helperText={errors.email?.message}
            error={!!errors.email?.message}
            />


            <TextField 
            {...register("password")}
            type='password' 
            id="outlined-basic" 
            fullWidth 
            label='Senha' 
            sx={{ mt:2, background: '#F5F5F5', color: '#999999' }}
            helperText={errors.password?.message}
            error={!!errors.password?.message}
            />



            <Button 
            type='submit' 
            fullWidth 
            variant='contained' 
            
            sx={{
                "&:hover": {
                    backgroundColor: '#2d2a77'
                },
                mt:3, 
                mb: 2, 
                bgcolor: '#403CAA',
                padding: 2
            }}> Logar </Button>

            <Typography component='p' variant='p' sx={{color: '#999999'}}>Criar uma Página para mostrar suas habilidades metas e progresso</Typography>
            
            <Button 
            type='submit' 
            fullWidth 
            variant='contained' 
            sx={{
                    "&:hover": {
                        backgroundColor: '#c3c3c3',
                    
                    },
                    mt:3, 
                    mb: 2, 
                    bgcolor: '#F5F5F5',
                    color: '#999999',
                    padding: 2
            }}
            onClick={() => handleClick()}> Cadastrar </Button>
        </Box>

        
        
    </Container>
    )
}
export default Login