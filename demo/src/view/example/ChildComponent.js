import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showDiv: false
    }

    showAndHide = () => {
        this.setState({
            showDiv: !this.state.showDiv
        })
    }

    deleteStudentChild = (student) => {
        this.props.deleteStudent(student)
    }

    render() {

        let {arrObject} = this.props
        let {showDiv} = this.state

        return (
            <>
                <div>
                    {showDiv === false ?
                        <button className={'btn-show'} onClick={() => this.showAndHide()}>show</button> :
                        <>
                            <div className={'list-student'}>
                                {
                                    arrObject.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.id} - {item.name} - {item.age}
                                                <button onClick={() => this.deleteStudentChild(item)}>xóa</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button onClick={() => this.showAndHide()}>hide</button>
                        </>
                    }

                </div>

            </>
        )
    }
}

export default ChildComponent;
