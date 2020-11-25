import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
    return (
        <div>Hey there!</div>
    )
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)