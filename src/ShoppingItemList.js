import React from 'react'
import PropTypes from 'prop-types'
import ShoppingItem from './ShoppingItem'
/**
 * Componente stateless responsável pela geração da lista de compras
 * @param {object} props objeto contendo as propriedades repassadas pelo componente pai
 */
function ShoppingItemList(props){
  return (
    <div>
        <p className="items">Items</p>
        <ol className="item-list">
        {props.items.map((item, index) => <ShoppingItem key={`item-${index}`} item={item}/>)}
        </ol>
    </div>
  )
}

/**
 * Tipos obrigatórios que devem ser repassados pelo componente pai
 */
ShoppingItemList.propTypes = {
  items: PropTypes.array.isRequired
}

/**
 * Exportação do componente para uso
 */
export default ShoppingItemList