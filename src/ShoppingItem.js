import React from 'react'
import PropTypes from 'prop-types'

function ShoppingItem(props){
    return (<li>{props.item}</li>)
}

ShoppingItem.propTypes = {
    item: PropTypes.string.isRequired
}

export default ShoppingItem