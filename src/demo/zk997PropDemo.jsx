import React from 'react'
import PropType from 'prop-types'
export default class Zk997PropDemo extends React.Component {

    render() {
        return (
            <div>
                title:{this.props.title}
            </div>)
    }
}

Zk997PropDemo.PropType= {
    title: PropType.string.isRequired
}
Zk997PropDemo.defaultProps={
    title:"zeroke"
}