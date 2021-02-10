import React from 'react'

export default class Zk996Compose extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "zeroke"
        }
    }
    submitHandler = (e) => {
        e.preventDefault()
    }
    valueChange = (e) => {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div>
                {this.props.children}
                <form onSubmit={this.submitHandler}>
                    <textarea value={this.state.value} onChange={this.valueChange}></textarea>
                </form>
            </div>
        )
    }
}