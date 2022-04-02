import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Movies } from '../pages/movies/movies'
import { MoviesDetails } from '../pages/moviesDetails/MoviesDetails'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"
                    component={Movies}
                />
                <Route exact path="/details/:id"
                    component={MoviesDetails}
                />
            </Switch>
        </BrowserRouter>
    )

}