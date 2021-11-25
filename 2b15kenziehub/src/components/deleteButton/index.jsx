import api from '../../services/api'
import styles from './styles.css'

const deleteButton = ( {item} ) => {
    return (
        <div>
            <button onClick={() => api.delete(`/users/works/${item.id}`)}>deletar</button>
        </div>
    )
}
export default deleteButton