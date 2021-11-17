import React from 'react';
import {withRouter} from "react-router";
import axios from "axios";

class DetailUser extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    sentUser = () => {
        this.props.history.push('/users')
    }

    render() {
        let {user} = this.state;
        let checkEmpty = Object.keys(user).length === 0
        return (
            <>
                <div>this is content of detail user {this.props.match.params.id}</div>
                {checkEmpty === false &&
                <>
                    <div>user name : {user.first_name} - {user.last_name}</div>
                    <div>email: {user.email}</div>
                    <div>
                        <img src={user.avatar}/>
                    </div>
                    <button onClick={() => this.sentUser()}>back list user</button>
                </>
                }
            </>
        );
    }

}

export default withRouter(DetailUser);
