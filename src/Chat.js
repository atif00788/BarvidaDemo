import React, { Component } from 'react'
//import logo from './logo.svg';
// import MessageForm from './MessageForm';
import Messages from './Messages';
import Input from './Input';

import './Chat.css';





class App extends Component {
  state = {
    messages: [
      {
        text: "Welcome to Barvida Chat",
       
      }
    ]
  }

  onSendMessage = (message) => {
    const messages = this.state.messages
    messages.push({
      text: message,
    })
    this.setState({messages: messages})

  }

  render() {
    return (
      <div className="App">
        <Messages
          messages={this.state.messages}
        />
        <Input
          onSendMessage={this.onSendMessage}

        />
      </div>
    );
  }


}

export default App;
