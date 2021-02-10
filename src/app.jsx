import { directive } from '@babel/types';
import React from 'react'
import ZkApp from './demo/zk000app'
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Debug: true
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.Debug ? <ZkApp></ZkApp>
                        : <div>

                        </div>
                }
            </div>
        )
    }
}