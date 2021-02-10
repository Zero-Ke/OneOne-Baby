import { directive } from '@babel/types';
import React from 'react'
import ZkApp from './demo/zk000app'
import AntdApp from './antd-demo/app'
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderZkApp() {
        return <ZkApp></ZkApp>
    }
    renderAntdApp() {
        return <AntdApp></AntdApp>
    }
    render() {
        return (
            <div>
                {this.renderAntdApp()}
            </div>
        )
    }
}