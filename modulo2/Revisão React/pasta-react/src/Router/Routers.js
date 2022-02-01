import React from "react";
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../Screens/LoginPage/LoginPage'
import CadastroPage from '../Screens/CadastroPage/CadastroPage'
import HomePage from '../Screens/HomePage/HomePage'
import AdicionarPostPage from '../Screens/AdicionarPostPage/AdicionarPostPage'
import PostPage from '../Screens/PostPage/PostPage'
import ErroPage from '../Screens/ErroPage/ErroPage'

const Routers = ({setRightButtonText}) => {
    return (
        <Switch>

            <Route exact path={"/login"}>
                <LoginPage setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path={"/cadastro"}>
                <CadastroPage setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path={"/"} >
                <HomePage />
            </Route>

            <Route exact path={"/detalhes/:id"}>
                <PostPage />
            </Route>

            <Route exact path={"/AdicionarPost"}>
                <AdicionarPostPage />
            </Route>

            <Route>
                <ErroPage />
            </Route>
        </Switch>
    )

}

export default Routers;