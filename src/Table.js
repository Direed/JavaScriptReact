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
    const rows = props.data.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.userId}</td>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.body}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class TableFull extends Component {
    render(){
        const {data} = this.props;

        return(
            <table>
                <TableHeader/>
                <TableBody data={data} />
            </table>
        );
    }
}
export default TableFull;