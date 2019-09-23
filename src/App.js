import React, { Component } from 'react'
//import Table from './Table'
import Routes from "./routes"

class App extends Component {
    /*
    state = {
        characters: [
            {
                name: 'teste',
                job: 'teste',
            },
        ]
    }

    funcRemoveCharacter = (index) => {        
        var novaChars = this.state.characters.filter((character, i) => {
            return i !== index
        })

        this.setState ({ characters: novaChars })
    }
    */
    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]})
    }
    
    handleVerify = character => {
        let nomeOk = false;
        let jobOk = false;
        let nomePattern = /[A-Za-z]{1,20}\s\w*/


        if (nomePattern.test(character.name)) {
            alert ('Nome ok')
        } else {
            alert ('Nome not ok')
        }
    }

    render() {
        //<Form handleSubmit={this.handleSubmit} handleVerify={this.handleVerify} />                
        //<Table characterData={this.state.characters} attRemoveCharacter={this.funcRemoveCharacter} />
        return (
            <div className="container">
                <h3>Hello, this is simple React + NodeJS + MongoDB site</h3>                
                <Routes />
            </div>
        )
    }
}

export default App