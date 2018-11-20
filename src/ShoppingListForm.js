import React from 'react'

function ShoppingListForm(props){
  const { inputValue, handleInputChange, addItemOnSubmitCallback, disableButtonCallback } = props;
  return (
    <form onSubmit={addItemOnSubmitCallback}> 
      <input
        type="text"
        placeholder="Enter New Item"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button disabled={disableButtonCallback()}>Add</button>
    </form>
  )
}

export default ShoppingListForm