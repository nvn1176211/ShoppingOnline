import React, { Component } from 'react';

class Message extends Component {
    render() {
        var { message } = this.props;
        return (
            <section className="mg-t20">
               <h5>
                <span className="bg-success text-light p-d-5">{message}</span>
               </h5>
            </section>
        );
    }
}

export default Message;
