import React from 'react'

function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

// create HOC in react
const Color = (WrappedComponent) => {
    const randomColor = generateRandomColor();
    return (props) => (
        <div style={{color: randomColor}}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default Color;
