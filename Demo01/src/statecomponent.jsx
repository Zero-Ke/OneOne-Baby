import React from 'react'

export default class StateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }
    sub2 = () => {
        this.setState({
            count: this.state.count -= 1
        },()=>{
            console.log(this.state.count)
        })
    }
    async sub() {
        await this.setStateAsync({count:this.state.count-1})
        console.log(this.state.count)
    }
    setStateAsync(state){
        return new Promise((resolve)=>{
            this.setState(state,resolve)
        })
    }
    log() {
        console.log(this.state.count)
    }
    render() {
        const { count } = this.state
        return (this.props.flag ?
                <div>
                    <button onClick={
                        () => {
                            this.setState({ count: count + 1 })
                            console.log(this.state.count)
                        }
                    }>Add</button>
                    <button onClick={this.sub.bind(this)}>Sub</button>
                    <button onClick={this.log.bind(this)}>Log</button>
                    <h5>异步(+)和同步(-)问题：{count}</h5>
                </div> : <div></div>
        )
    }
}