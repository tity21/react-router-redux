import React, { Component } from 'react'
// import { NavLink, withRouter } from 'react-router-dom'
// import RouterView from 'router'
import './index.scss'
import logo from 'common/logo.svg'

export class WrapPage extends Component {
    render() {
        // const { routes } = this.props
        return (
            <div className="wrapper">
                <div className="main">
                    {/* 二级路由挂载处 */}
                    {/* <RouterView routes={routes} /> */}
                    <img src={logo} alt="" />
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default WrapPage
