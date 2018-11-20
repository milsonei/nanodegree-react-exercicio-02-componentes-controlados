import React, {Component} from 'react'
import PropTypes from 'prop-types'

const ENTER_KEY = 13;

/**
 * Componente controlado responsável pela inclusão de um item na lista de compra
 */
class ShoppingListForm extends Component{
  state = {
    value: ''
  }

  // Usa `ref` callback para armazenar uma referência para o elemento text input DOM em um campo de instância (por exemplo, this.textInput).
  setTextInputRef = element => {
    this.textInput = element;
  };

  /**
   * Redireciona o foco do elemente input usando a raw DOM API
   */
  focusTextInput = () => {
    // Focus the text input using the raw DOM API
    if (this.textInput) this.textInput.focus();
  };

  /**
   * Rotinas execuadas após a montagem do componente
   */
  componentDidMount() {
    this.focusTextInput();
  }
  
  /**
   * Manipula o evento keydown do input para adicionar um item após pressionar a tecla ENTER
   */
  handleKeyDown = event => {
    if (event.keyCode === ENTER_KEY) {
      if (this.state.value !== ''){
        this.addItem(event)
      }
    }
  }
  
  /**
   * Manipula o evento change do input para alterar o campo value do objeto state à medida que um valor for sendo digitado
   */
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  /**
   * Limpa o campo value do objeto state
   */
  clear = () => {
    this.setState({ value: '' })
  };

  /**
   * Adiciona um elemento na lista baseado no text informado
   */
  addItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
    this.clear();
    this.focusTextInput();
  };
  
  /**
   * Verifica se o input está vazio baseado no campo value do objeto state
   */
  inputIsEmpty = () => {
    return this.state.value === '';
  };

  /**
   * Renderiza o componente controlado
   */
  render() {
    return (
      <form onSubmit={this.addItem}> 
        <input          
          ref={this.setTextInputRef} 
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    )
  }
}

/**
 * Validação dos tipos obrigatórios que devem ser repassados pelo componente pai
 */
ShoppingListForm.propTypes = {
  onAddItem: PropTypes.func.isRequired
}

/**
 * Exportação do componente para uso
 */
export default ShoppingListForm