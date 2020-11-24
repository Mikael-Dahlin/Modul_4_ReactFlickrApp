import React from 'react';
import PropTypes from 'prop-types';

class Message extends React.Component{
    // Checks if message should be displayed.
    displayMessage = () => {
        return {
            justifyContent: 'center',
            display: this.props.showMessage ? 
            'flex' : 'none'
        }
    }

    messageStyle = {
        display: 'flex',
        border: '1px solid #f5f59d',
        borderRadius: '4px',
        backgroundColor: '#d0d06a',
        alignItems: 'center',
        margin: '20px',
        padding: '20px',
    }
    
    render() {
        return (
            <div onClick={this.props.hideMessage} style={this.displayMessage()}>
                <div style={this.messageStyle}>{this.props.message}</div>
            </div>
        )
    }
}

Message.propTypes = {
    message: PropTypes.string.isRequired, 
    showMessage: PropTypes.bool.isRequired,
    hideMessage: PropTypes.func.isRequired
}

export default Message;