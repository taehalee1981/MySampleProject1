import React, { Component } from 'react'
import api from './services/api'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            title: '',
            description: '',
            url:'',
        }

        this.state = this.initialState
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    /* Para botão de verificar a entrada
    onFormVerify = () => {
        this.props.handleVerify(this.state)
    }
    */ 
    onFormSubmit = async (e) => {
        e.preventDefault()
        const {title, description, url} = this.state;
        const client = {title, description, url};

        const response = await api.post('/products', client)

        this.props.handleSubmit()
        this.setState(this.initialState)        
    }

    render() {
        //<input type="button" value="Verify" onClick={this.onFormVerify} />
        //<input type="button" value="Submit" onClick={this.onFormSubmit} />
        return (
            <form method="post" onSubmit={this.onFormSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                <label>Description</label>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default Form;