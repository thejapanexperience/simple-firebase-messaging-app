import React, { Component } from 'react';
import { connect } from 'react-redux'
import MessageList from './MessageList';
import NewMessageForm from './NewMessageForm'
import {createNewMessage} from '../actions/FirebaseActions'

@connect(state => ({
  messages: state.messages
}), dispatch => ({
  submitNewMessage(message){
    dispatch(createNewMessage(message))
  }
}))
export default class Layout extends Component {

  render() {
    const { messages, submitNewMessage } = this.props
    return (
      <div className="container">
        <h1 className="text-center">Redux Express</h1>
        <NewMessageForm submitNewMessage={submitNewMessage}/>
        <MessageList messages={messages}/>
      </div>
    );
  }
}
