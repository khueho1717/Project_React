import React from 'react';
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrStudent: [
            {
                id: '1',
                name: 'Nguyễn Văn An',
                age: 18,
            },
            {
                id: '2',
                name: 'Nguyễn Văn Lâm',
                age: 19,
            },
            {
                id: '3',
                name: 'Nguyễn Văn Vũ',
                age: 20,
            },
        ]
    }

// đây là hàm sẽ gọi sau render
    componentDidMount() {
        console.log('khởi tạo đầu tiên')
    }

    // đây là hàm tạo khi state update
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('đây là state trước',prevState,'và đây là state hiện thại', this.state)
    }

    addStudent = (student) => {
        this.setState({
            arrStudent: [...this.state.arrStudent, student]
        })
    }

    deleteStudent = (student) => {
        let currentArr = this.state.arrStudent;
        currentArr = currentArr.filter(item => item.id !== student.id);
        this.setState({
            arrStudent: currentArr
        })
    }

    render() {

        return (
            <>
                <AddComponent addNewStudent={this.addStudent}/>
                <ChildComponent arrObject={this.state.arrStudent} deleteStudent={this.deleteStudent}/>
            </>
        )
    }
}

export default MyComponent;
