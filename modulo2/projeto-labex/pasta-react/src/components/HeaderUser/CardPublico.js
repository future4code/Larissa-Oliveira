import React from 'react'
import {useHistory} from 'react-router-dom'
import {Card, Imagem} from './styled.js'
import {goToListTripsPage,} from '../../Router/goToPages'

const CardPublico = (props) => {
    const history = useHistory()

    return(
        <Card onClick={()=>goToListTripsPage(history)}>
            
            <h2>Área de Viagens</h2>
            <Imagem>
            <img src="https://static.meionorte.com/uploads/imagens/2019/2/2/thumb/r-1200-800-q-90-viagens-espaciais-afetam-o-cerebro-e-dna-de-astronautas-cfbf038c-d742-49da-ac42-f1109bc86d0d.jpg" alt="imagem-astronauta" />
            </Imagem>
        </Card>
    )
}
export default CardPublico