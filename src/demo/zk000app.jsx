import React from 'react'

import Zk996Compose from './zk996Compose'
import Zk997PropDemo from './zk997PropDemo'
import Zk998StateTest from './zk998State'
import Zk999Nav from './zk999Nav';

export default class ZkApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        }
    }
    render() {
        return (
            <div>
                { this.render996Prop()}
                {/* {this.render997Compose()} */}
                {/* {this.render998State()} */}
                {/* {this.render999Nav()} */}
            </div>
        )
    }

    //#region 996 props属性
    render996Prop() {
        return <Zk997PropDemo title="Title"></Zk997PropDemo>
    }
    //#endregion

    //#region 997 组合与继承：input输入框
    render997Compose() {
        return (
            <div>
                <Zk996Compose>
                    <div>Name:</div>
                </Zk996Compose>
            </div>
        )
    }
    //#endregion

    //#region 998同步与异步:递增
    render998State() {
        return (
            <div><Zk998StateTest flag={this.state.flag}></Zk998StateTest></div>
        )
    }
    //#endregion

    //#region 999导航功能
    render999Nav() {
        const navlist = ["段落1", '段落2', '段落3']
        const navlist2 = ['段落4', '段落5', '段落6']
        const { flag } = this.state
        return (
            <div>
                <h1>Hello React Component</h1>
                <Zk999Nav nav={navlist} title="Page1"></Zk999Nav>
                <Zk999Nav nav={navlist2} title="Page2"></Zk999Nav>
                <div><h1>State Change</h1>
                    <button onClick={
                        () => {
                            this.setState({ flag: !flag })
                        }
                    }>{flag ? 'Hide' : "Show"}</button>
                    {
                        flag == true ?
                            <div>
                                显示
                            </div> :
                            <div>隐藏</div>
                    }
                </div>
            </div>)
    }
    //#endregion
}