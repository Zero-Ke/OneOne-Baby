import React from 'react'
import ZkNav from './zk001Nav';
import ZkStateTest from './zk002State'
import ZkCompose from './zk003Compose'
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
                {this.render003Compose()}
                {/* {this.render002State()} */}
                {/* {this.render001Nav()} */}
            </div>
        )
    }
    //#region 003 组合与继承：input输入框
    render003Compose() {
        return (
            <div>
                <ZkCompose>
                    <div>Name:</div>
                </ZkCompose>
            </div>
        )
    }
    //#endregion

    //#region 001导航功能
    render001Nav() {
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

    //#region 002同步与异步:递增
    render002State() {
        return (
            <div><ZkStateTest flag={this.state.flag}></ZkStateTest></div>
        )
    }
    //#endregion
}