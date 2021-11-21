import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styles from './styles.css'

const DevPage = ({auth}) => {
    
    return(
        <div className='big-container'>
            <section className='tecnologias'>
                <h4>Minhas tecnologias</h4>
                <ul>
          
                </ul>
            </section>
            <section className='meus-trabalhos'>
            <h4>Meus trabalhos</h4>
                <ul>
                    
                </ul>
            </section>
            <section className='profile'>
                <div className='profile-header'></div>
                <ul>

                </ul>
            </section>

        <Link to='/'>Voltar </Link>
        </div>

    )
}
export default DevPage