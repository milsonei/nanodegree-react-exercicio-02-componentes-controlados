import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingListForm from './ShoppingListForm'
import DeleteLastItemButton from './DeleteLastItemButton'
import ShoppingItemList from './ShoppingItemList'

class App extends React.Component {
  state = {
    items: [],
  };
  /**
   * Adiciona um novo item para a lista de compras armazenada em items do objeto state
   */
  handleAddItem = item => { 
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  /**
   * Remove o último item da lista de compras
   */
  handleDeleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  /**
   * Verifica se a lista de compras está vazia
   */
  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  /**
   * Renderiza o componente
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <ShoppingListForm onAddItem={this.handleAddItem}/>
        <DeleteLastItemButton onDeleteLastItem={this.handleDeleteLastItem} buttonDisabled={this.noItemsFound()}/>
        <ShoppingItemList items={this.state.items}/>              
      </div>
    );
  }
}

export default App;
