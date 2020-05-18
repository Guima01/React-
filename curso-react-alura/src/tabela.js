import React, { Component } from 'react';


const TableHead = () =>{
    return (<thead>
        <tr>
          <th>Autores</th>
          <th>Livros</th>
          <th>Preços</th>
          <th>Remover</th>
        </tr>
        </thead>)
}

const TableBody =  props =>{
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button>Remover</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    )
}


class tabela extends Component {

    render() {

        const { autores } = this.props;
        return (<table>
            <TableHead></TableHead>          
            <TableBody autores = {autores}></TableBody>
          </table>)
    }

}

export default tabela;