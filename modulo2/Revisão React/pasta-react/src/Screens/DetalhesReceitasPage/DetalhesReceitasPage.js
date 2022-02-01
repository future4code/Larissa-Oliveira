import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage'

const DetalhesReceitasPage = () => {
    useProtectedPage()
    
    return(
        <div>
            <h1>Detalhes Receitas</h1>
        </div>
    )
}

export default DetalhesReceitasPage