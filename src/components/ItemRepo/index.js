import React from "react";
import {ItemContainer} from './styles'

function ItemRepo({repo}) {
    const handleRemove = () => {
        
      }
    
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name }</p>
            <a href={repo.html_url} target="_blank" className="search">Acessar</a>
            <a href="#" className="remove">Remover</a>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;