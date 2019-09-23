import React, { Component } from 'react'
import api from './services/api'
import Form from './Form'
import { Link }from 'react-router-dom'


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Detail</th>
                <th>Delete</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.clientsData.map((client, index) => {
        return (
            <tr key={index}>
                <td>{client.title}</td>
                <td>{client.description}</td>
                <td>
                    <Link to={`/products/${client._id}`}>Detail</Link>
                </td>
                <td>
                    <button onClick={() => props.onClick(client._id)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class Table extends Component {
    state = {
        clientes: [],
        clientsInfo: {},
        page:1 ,
    }

    componentDidMount() {
        this.loadClients()
    }

    loadClients = async (page = 1) => {        
        const response = await api.get(`/products?page=${page}`)

        // "..." significa RESTOS
        const { docs, ...clientsInfo} = response.data;

        this.setState({
            clientes: docs,
            clientsInfo: clientsInfo,
        })
    }

    removeClient = async (id) => {        
        var idDestruid = '/products/' + id
        
        const response = await api.delete(idDestruid)
        this.loadClients ()        
        alert ('Client deleted')        
    }

    prevPage = () => {
        const { page, clientsInfo } = this.state
        if (page === 1) return

        const pageNumber = page - 1

        this.loadClients(pageNumber)
    }

    nextPage = () => {
        const { page, clientsInfo } = this.state
        if (page === clientsInfo.pages) return

        const pageNumber = page + 1

        this.loadClients(pageNumber)
        this.setState ({page: pageNumber})
    }

    render() {
        return (
            <div className="client-list">
                <Form handleSubmit={this.loadClients} />
                <table>
                    <TableHeader />
                    <TableBody clientsData={this.state.clientes} onClick={this.removeClient}/>
                </table>
                <div className="buttons">
                    <button onClick={this.prevPage}>Prior</button>
                    <button onClick={this.nextPage}>Next</button>
                </div>
                <h5>Number of Retrieved Clientes : {this.state.clientes.length} </h5>
                <h5>Number of Total Clientes : {this.state.clientsInfo.total} </h5>
            </div>
        );
    }
}

export default Table