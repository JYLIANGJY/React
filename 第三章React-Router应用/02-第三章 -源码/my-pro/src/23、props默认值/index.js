import React from 'react'
class App extends React.Component{
    render() {
        return (
            <div>
                {
                    this.props.num
                }
            </div>
        )
    }
}
App.defaultProps = {
    num:10
}
export default App