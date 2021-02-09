import React from 'react'
import Nav from './nav';
import StateComponent from './statecomponent'
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        }
    }
    render() {
        const navlist = ["段落1", '段落2', '段落3']
        const navlist2 = ['段落4', '段落5', '段落6']
        const { flag } = this.state
        return (
            <div>
                <h1>Hello React Component</h1>
                <Nav nav={navlist} title="Page1"></Nav>
                <Nav nav={navlist2} title="Page2"></Nav>
                <div><h1>State Change</h1>
                    <button onClick={
                        () => {
                            this.setState({ flag: !flag })
                        }
                    }>{flag ? 'Hide' : "Show"}</button>
                    {
                        flag == true? 
                        <div>
                            显示
                        </div>:
                        <div>隐藏</div>
                    }
                </div>
                <div><StateComponent flag={flag}></StateComponent></div>
            </div>
        )
    }
}