import React from 'react'
import ZkNav from './demo/zk001Nav';
import ZkStateTest from './demo/zk002State'
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
                <ZkNav nav={navlist} title="Page1"></ZkNav>
                <ZkNav nav={navlist2} title="Page2"></ZkNav>
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
                <div><ZkStateTest flag={flag}></ZkStateTest></div>
            </div>
        )
    }
}