import React, { Component } from 'react'


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {        
        // The onClick function must pass through a function that returns the removeCharacter() method, otherwise it will try to run automatically.
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>                    
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}


class Table extends Component {
    render() {
        //const { characterData } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={this.props.characterData} removeCharacter={this.props.removeCharacter}/>
            </table>
        )
    }
}

export default Table