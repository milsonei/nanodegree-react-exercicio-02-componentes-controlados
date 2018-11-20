import React from 'react'
import PropTypes from 'prop-types'
/**
 * Componente funcional stateless responsável pela geração do item da lista de compra
 * @param {object} props objeto contendo as propriedades repassadas pelo componente pai
 */
function ShoppingItem(props){
    return (<li>{props.item}</li>)
}

/**
 * Validação dos tipos obrigatórios que devem ser repassados pelo componente pai
 */
ShoppingItem.propTypes = {
    item: PropTypes.string.isRequired
}

/**
 * Exportação do componente para uso
 */
export default ShoppingItem