import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Imagem} from './styled.js'
import { goToAdminHomePage } from '../../Router/goToPages'

const CardPrivado = (props) => {
    const history = useHistory()

    return (
        <Card onClick={() => goToAdminHomePage(history)}>
            <h2>Área Administrativa</h2>
            <Imagem>
                <img src="https://fotospublicas.com/wp-content/uploads/2021/01/50864091957_8264827dc9_k.jpg" alt="imagem-astronauta-administrador" />
            </Imagem>
        </Card>
    )
}
export default CardPrivado