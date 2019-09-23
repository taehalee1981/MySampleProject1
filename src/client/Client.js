import React, { Component } from 'react';
import api from '../services/api';
import './styles.css'

export default class Client extends Component {
    state = {
        client: {},
    }

    async componentDidMount () {
        // desestruturação
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ client: response.data})
    }

    render() {
        const { client } = this.state
        return (
            <div className="client-info">
                <h1>{client.title}</h1>
                <p>{client.description}</p>

                <p>
                    URL: <a href={client.url}>{client.url}</a>
                </p>
            </div>        
        )
    }
}