import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styles from './styles.css'
import { FiSmile, FiPhoneCall, FiMail } from 'react-icons/fi'
import { useHistory } from "react-router-dom"
import Modal from '../../components/modal'

const DevPage = ({auth}) => {
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")) || '')

    const history = useHistory();

    return(
        <div className='big-container'>
            <div className='header'>
                <h1>Kenzie </h1>
                <span className='hub2'>Hub</span>
            </div>
            <section className='big-section'>
                <section className='tecnologias'>
                <div className='cabecalho-tech'>
                        <h2>Minhas tecnologias</h2>
                        <button className='button-add-tech'>+</button>
                        <Modal></Modal>
                    </div>
                    <ul>
                        {/* {user.techs.map((item) => <li>{item}</li>)} */}
                    </ul>
                </section>
                <section className='meus-trabalhos'>
                    <div className='cabecalho-trabalhos'>
                        <h2>Meus trabalhos</h2>
                        <button className='button-add-trabalho'>+</button>
                    </div>
                
                    <ul>
                        
                    </ul>
                </section>
                <section className='profile'>
                    <div className='profile-header'>
                        <div className='avatar'>
                            <FiSmile className='avatar' size={70} color='white' mt='10px'/>
                        </div>
                        <div className='dev-info'>
                            <h2>{user.name}</h2>
                            <p>{user.course_module}</p>
                        </div>
                    

                    </div>
                    <li className='li-info1'>
                        <FiPhoneCall className='avatar' size={45} color='white' mt='10px'/>
                        <div className='dev-info2'>
                            <p>Ligar agora</p>
                            <span>{user.contact}</span>
                        </div>
                    </li>
                    <li className='li-info2'>
                        <FiMail className='avatar2' size={45} color='white' mt='10px'/>
                        <div className='dev-info2'>
                            <p>Enviar email</p>
                            <span>{user.email}</span>
                        </div>
                    </li>
                    <button className='button-sair' onClick={() => history.push('/')}>Sair</button>
                </section>
            </section>
           

        </div>

    )
}
export default DevPage