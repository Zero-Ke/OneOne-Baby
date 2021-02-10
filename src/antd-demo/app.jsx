import React from 'react'
//按需加载
import Button from 'antd/es/button'
import Pagination from 'antd/es/pagination'
export default class AntdApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    pageChange = (page,pageSize) => {
        console.log(page,pageSize)
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
                <Pagination defaultCurrent="1" total="50" pageSize={5} onChange={this.pageChange}></Pagination>
            </div>
        )
    }

}