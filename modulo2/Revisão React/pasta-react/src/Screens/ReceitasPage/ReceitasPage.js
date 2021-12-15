import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage'

const ReceitasPage = () => {
    useProtectedPage()
    
    return(
        <div>
            <h1>Receitas page</h1>
        </div>
    )
}

export default ReceitasPage