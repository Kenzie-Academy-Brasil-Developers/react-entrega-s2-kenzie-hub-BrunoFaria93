import { Container, Button, TextField, CssBaseline, 
    Box, Avatar, Typography, Grid, FormControlLabel, Checkbox} from "@mui/material"
import { Link } from 'react-router-dom'

const Cadastro = ({auth}) => {

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
            <Typography component='h1' variant='h4'>KenzieHub</Typography>
        </Box>
        <Box 
        component='form' 
        sx={{ mt: 1, border: '1px solid #F5F5F5'}} 
        >
            
            <TextField fullWidth label='Nome' sx={{ mt:2 }}/>
            <TextField fullWidth label='Email' sx={{ mt:2 }}/>
            <TextField fullWidth label='Bio' sx={{ mt:2 }}/>
            <TextField fullWidth label='Contato' sx={{ mt:2 }}/>
            <TextField fullWidth label='Bio' sx={{ mt:2 }}/>
            <TextField fullWidth label='Contato' sx={{ mt:2 }}/>
            <Box component='div'  sx={{ 
                mt: 1, 
                border: '1px solid #F5F5F5',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
                }}>
                <FormControlLabel 
                    control={<Checkbox value='Primeiro'/>}
                    label="Primeiro"    
                
                />
                <FormControlLabel 
                    control={<Checkbox value='Segundo'/>}
                    label="Segundo"    
                
                />
                <FormControlLabel 
                    control={<Checkbox value='Terceiro'/>}
                    label="Terceiro"    
                
                />
                <FormControlLabel 
                    control={<Checkbox value='Quarto'/>}
                    label="Quarto"    
                
                />
            </Box>
            <TextField id="outlined-basic" fullWidth label='Senha' sx={{ mt:2 }}/>
            <TextField id="outlined-basic" fullWidth label='Confirmar Senha' sx={{ mt:2 }}/>

            <Button type='submit' fullWidth variant='contained' 
                sx={{
                    "&:hover": {
                        backgroundColor: '#2d2a77'
                    },
                    mt:3, 
                    mb: 2, 
                    bgcolor: '#403CAA',
                    padding: 2
                }}> Cadastrar </Button>
            <Link to='/'>Voltar</Link>
        
        </Box>

        
        
    </Container>
    )
}
export default Cadastro