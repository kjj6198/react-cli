import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '' /* import Your action */

class {{filename}} extends Component {
	constructor(props) {
		super(props);
	}

	render() {

	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(App);

function mapStatesToProps(state) {
	/* return your state which want to be props */
	
	return {
		...state,
	}
}

function mapDispatchToProps(dispatch) {
	const actions = {}; /* implement actions method */
	return {
		...bindActionCreators(actions, dispatch)
	}
}