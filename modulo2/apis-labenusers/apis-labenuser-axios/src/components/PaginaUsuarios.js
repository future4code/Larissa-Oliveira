// import axios from 'axios';
import React from 'react';

export default class PaginaUsuarios extends React.Component {

    render() {
        console.log(PaginaUsuarios)
        return (
            <div>
            {this.props.listaDeUsuario.map((usuario)=>{
                return <p>{usuario.name}</p>
            })}
            </div>
        )
    }
}