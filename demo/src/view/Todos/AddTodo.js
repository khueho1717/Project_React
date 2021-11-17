import React from 'react';
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        id: '',
        title: ''
    }

    addNewTodo = () => {
        if (this.state.title === '') {
            toast.error('please input content')
            return
        } else {
            this.props.addNewTodo(
                {
                    id: Math.floor(Math.random() * 110),
                    title: this.state.title
                }
            )
            this.state.title = '';
            toast.success('so good')
        }

    }

    handleTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (this.state.title === '') {
                toast.error('please input content')
                return
            } else {
                this.props.addNewTodo(
                    {
                        id: Math.floor(Math.random() * 110),
                        title: this.state.title
                    }
                )
                this.state.title = '';
                toast.success('so good')
            }
        }
    }

    render() {
        return (
            <div style={{margin: '5px'}}>
                <h1>todo list</h1>
                <input onKeyPress={(event) => this.handleKeyPress(event)} onChange={(event) => this.handleTitle(event)} value={this.state.title} type={'text'}/>
                <button onClick={() => this.addNewTodo()}>add</button>
            </div>
        )
    }
}

export default AddTodo
