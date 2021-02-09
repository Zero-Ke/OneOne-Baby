import React from 'react'

export default class Nav extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h3> {this.props.title}</h3>
                {/* 
                   {} 为JavaScript语法，即对对象进行操作
                   () 为HTML语法
                */}
                <ul>
                    {
                        this.props.nav.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}