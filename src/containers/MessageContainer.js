import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './../components/Message';
import PropTypes from 'prop-types';

class MessageContainer extends Component {
    render() {
        var { message } = this.props;
        return (
           <Message message={ message } />
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

export default connect(mapStateToProps, null)(MessageContainer);
