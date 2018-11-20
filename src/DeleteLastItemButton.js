import React from 'react'

function DeleteLastItemButton(props){
  
    const {deleteLastItemCallback, disableButtonCallback} = props;
    return (
        <button onClick={deleteLastItemCallback} disabled={disableButtonCallback()}>
        Delete Last Item
      </button>
    )
}

export default DeleteLastItemButton