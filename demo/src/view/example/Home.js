import React from 'react'
import Color from "../hoc/Color";
import {connect} from 'react-redux'

class Home extends React.Component {

    deleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }

    addUser = () => {
        this.props.addUserRedux();
    }

    render() {
        let listUserRedux = this.props.dataRedux;
        return (
            <div>
                <h1>List user redux</h1>
                {listUserRedux && listUserRedux.length > 0 &&
                listUserRedux.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <div>stt: {index + 1} - name: {item.name}
                                <button onClick={() => this.deleteUser(item)}>delete</button>
                            </div>
                        </div>
                    )
                })
                }
                <button onClick={() => this.addUser()}>Add</button>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'ADD_USER'})
    })
}

export default connect(mapStatetoProps, mapDispatchToProps)(Color(Home));

