import React from 'react';
import axios from "axios";
import './User.css'
import {withRouter} from "react-router";

class ListUsers extends React.Component {

    state = {
        listUser: []
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                this.setState({
                    listUser: res && res.data && res.data.data ? res.data.data : []
                })
            })
    }

    sentUser = (user) =>{
        this.props.history.push(`/user/${user.id}`);
    }

    render() {

        let {listUser} = this.state;

        return (
            <>
                <h2> list User</h2>
                <div>
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Avatar</th>
                            <th>View</th>
                        </tr>

                        {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <>
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.email}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>
                                            <img src={item.avatar}/>
                                        </td>
                                        <td>
                                            <button onClick={() => this.sentUser(item)}>View</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                        }
                    </table>
                </div>
            </>
        );
    }
}

export default withRouter(ListUsers);
