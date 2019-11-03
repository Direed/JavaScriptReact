import React, {Component} from 'react';

const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
    );
}
const TableBody = props =>{
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.userId}</td>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.body}s</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class TableFull extends Component {
    render(){
        const {characterData} = this.props;

        return(
            <table>
                <TableHeader/>
                <TableBody characterData={characterData} />
            </table>
        );
    }
}
export default TableFull;