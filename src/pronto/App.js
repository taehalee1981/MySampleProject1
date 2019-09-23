import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    //Para usar a declaração de funcão normal como abaixo, é necessário usar o constructor e usar  .bind(this). Senão, dá erro de referencia na hora de chamar a função.
    //constructor(props) {
    //    super(props);
    //    this.removeCharacter = this.removeCharacter.bind(this);
    //}
    //removeCharacter (index) {

    removeCharacter = index => {
        const { characters } = this.state

        // this.setState ( {nomeVariavel: estado ou qq coisa } )  ou seja, recebe um objeto como parametro        
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
        // Se não quiser mudar nada
        //var novaLista = this.state.characters
        //alert('ssss')
        //this.setState({characters: novaLista})        
    }

    state = {
        characters: [],
    }

    handleSubmit = character => {
        //var parts = ['two', 'three'];
        //var numbers = ['one', ...parts, 'four', 'five']; // ["one", "two", "three", "four", "five"]
        this.setState ({ characters: [...this.state.characters, character]})
    }

    render () {
        const { characters } = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default App