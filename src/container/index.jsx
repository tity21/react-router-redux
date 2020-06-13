import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import RouterView from 'router'

class Entry extends Component {
	render() {
		const { routes } = this.props
		return (
			<BrowserRouter>
				{/* 一级路由挂载处 */}
				<RouterView routes={routes} />
			</BrowserRouter>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}
const mapDispatchToProps = (dispatch) => {
	return {
		// data() {
		// 	dispatch({
		// 		type: "DATA",
		// 		payload: payload
		// 	})
		// }
	}
}
export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(Entry)
