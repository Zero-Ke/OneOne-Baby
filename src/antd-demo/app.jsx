import React from 'react'
//按需加载
import Button from 'antd/es/button'
import 'antd/es/button/style/css'
//import { Button } from 'antd'
//import 'antd/dist/antd.css'
export default class AntdApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="AntdApp">
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </div>
        )
    }

}