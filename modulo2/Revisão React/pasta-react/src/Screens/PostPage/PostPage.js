import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage'
import RecipeCard from '../../Components/RecipeCard/RecipeCard'

const PostPage = () => {
    useProtectedPage()
    
    return(
        <RecipeCard>
            <h1>Post Page detalhe</h1>
        </RecipeCard>
    )
}

export default PostPage