import React from 'react';
import './Title.css';

interface ITile {
    nome: string
}

function Title (props: ITile) {
    return (
        <h1>  {props.nome} </h1>
    );
}

export {Title};