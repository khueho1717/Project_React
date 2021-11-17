import React from 'react';
import './Todo.css'
import AddTodo from "./AddTodo";
import {toast} from "react-toastify";
import Color from "../hoc/Color";

class TodoList extends React.Component {

    state = {
        listTodo: [
            {
                id: 1,
                title: 'việc làm đầu tiên'
            },
            {
                id: 2,
                title: 'việc làm đầu tiên 2'
            },
            {
                id: 3,
                title: 'việc làm đầu tiên 3'
            },
            {
                id: 4,
                title: 'việc làm đầu tiên 4'
            }
        ],
        editTodos: {}
    }

    addTodo = (todo) => {
        let currentTodo = this.state.listTodo;
        this.setState({
            listTodo: [...currentTodo, todo]
        })

    }

    deleteTodo = (todo) => {
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentTodo
        })
        toast.success('xóa thành công')
    }

    editToDo = (todo) => {

        let {listTodo, editTodos} = this.state;
        let checkObjEmpty = Object.keys(editTodos).length === 0

        // save todos

        if (checkObjEmpty === false && editTodos.id === todo.id) {
            let listTemp = listTodo;
            let indexEdit = listTemp.findIndex((item => item.id === todo.id));
            listTemp[indexEdit].title = todo.title;

            this.setState({
                listTodo: listTemp,
                editTodos: {}
            })

            toast.success('edit success');
            return
        }

        this.setState({
            editTodos: todo
        })
    }

    editOnChangeToDo = (event) => {

        let copyEdit = this.state.editTodos;
        copyEdit.title = event.target.value;
        this.setState({
            editTodos: copyEdit
        })
    }

    handleKeyPress = (event, todo) => {
        if (event.key === 'Enter') {
            let {listTodo, editTodos} = this.state;
            let checkObjEmpty = Object.keys(editTodos).length === 0

            // save todos

            if (checkObjEmpty === false && editTodos.id === todo.id) {
                let listTemp = listTodo;
                let indexEdit = listTemp.findIndex((item => item.id === todo.id));
                listTemp[indexEdit].title = todo.title;

                this.setState({
                    listTodo: listTemp,
                    editTodos: {}
                })

                toast.success('edit success');
                return
            }

            this.setState({
                editTodos: todo
            })
        }
    }

    render() {

        let {listTodo, editTodos} = this.state;
        let checkEmpty = Object.keys(editTodos).length === 0

        return (
            <div className={'list-todo-container'}>
                <AddTodo addNewTodo={this.addTodo}/>
                <div className={'list-todo'}>
                    {listTodo && listTodo.length > 0 &&
                    listTodo.map((item, index) => {
                        return (
                            <div key={item.id} className={'element-todo'}>
                                {checkEmpty === true ?
                                    <>
                                        <span>{index + 1} - {item.title} </span>
                                        <button style={{margin: '5px'}} onClick={() => this.deleteTodo(item)}>Delete
                                        </button>
                                        <button onClick={() => this.editToDo(item)}>Edit</button>
                                    </> :
                                    <>
                                        {editTodos.id === item.id ?
                                            <>
                                                <span>{index + 1} - </span>
                                                <input type={'text'}
                                                       onKeyPress={(event => this.handleKeyPress(event, this.state.editTodos))}
                                                       onChange={(event) => this.editOnChangeToDo(event)}
                                                       value={this.state.editTodos.title}/>
                                                <button style={{margin: '5px'}}
                                                        onClick={() => this.deleteTodo(item)}>Delete
                                                </button>
                                                <button onClick={() => this.editToDo(this.state.editTodos)}>Save
                                                </button>
                                            </> :
                                            <>
                                                <span>{index + 1} - {item.title} </span>
                                                <button style={{margin: '5px'}}
                                                        onClick={() => this.deleteTodo(item)}>Delete
                                                </button>
                                                <button onClick={() => this.editToDo(item)}>Edit</button>
                                            </>
                                        }
                                    </>
                                }

                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }

}

export default Color(TodoList);
