import React from 'react'
import PropTypes from 'prop-types'
/**
 * Componente funcional responsável por excluir um item da lista de compras
 * @param {object} props 
 */
function DeleteLastItemButton(props){
   
   const handleDeleteLastItem = event => props.onDeleteLastItem();

    return (
        <button onClick={handleDeleteLastItem} disabled={props.buttonDisabled}>
        Delete Last Item
      </button>
    )
}

/**
 * Validação dos tipos obrigatórios que devem ser repassados pelo componente pai
 */
DeleteLastItemButton.propTypes = {
    buttonDisabled: PropTypes.bool.isRequired,
    onDeleteLastItem: PropTypes.func.isRequired,
};

/**
 * Exportação do componente para uso
 */
export default DeleteLastItemButton