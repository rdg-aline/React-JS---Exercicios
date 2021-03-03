import React from 'react'
//import React from 'react'
import Item from './item'

function ListadeCompras(){
    return(
        <div className="lista">
        <Item nome ="leite"/>
        <Item nome ="chá"/>
        <Item nome ="café"/>
        <Item nome ="suco"/>
        <Item nome ="cereal"/>
    </div>
    )
}
export default ListadeCompras