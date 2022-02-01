import React from "react";
import erro from "../../Assets/erro.gif"
import Typography from '@material-ui/core/Typography'
import { ErroPageImage, ErroPageContainer } from "./Styled";

const ErroPage = () => {
    return (
        <ErroPageContainer>
            <ErroPageImage src={erro} alt={"404 image"} />
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 -Página não encontrada.</Typography>
        </ErroPageContainer>
    )
}
export default ErroPage;