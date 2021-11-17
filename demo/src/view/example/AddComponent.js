import React from 'react';

class AddComponent extends React.Component {

    state = {
        name: '',
        age: '',
    }

    handleFirstName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleLastName = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleSubmit = () => {
        if (this.state.name === '' || this.state.age === ''){
            alert('yêu cầu nhập vaog ô input nếu như bạn muốn thêm mới')
            return
        }
        this.props.addNewStudent({
            id: Math.floor(Math.random() * 100),
            name: this.state.name,
            age: this.state.age
        })

        this.setState({
            name: '',
            age: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Name:</label><br/>
                    <input type="text" value={this.state.name}
                           onChange={(event) => this.handleFirstName(event)}/><br/>
                    <label htmlFor="lname">Age:</label><br/>
                    <input type="text" value={this.state.age}
                           onChange={(event) => this.handleLastName(event)}/><br/><br/>
                    <input type="button" value="submit" onClick={() => this.handleSubmit()}/>
                </form>
            </>
        )
    }

}

export default AddComponent;
