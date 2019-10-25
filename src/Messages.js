
import React, { Component } from 'react'
import './MessageForm.css'

class Messages extends Component {
  
  renderMessage(message) {

    const {text} = message;
    
     return (
      <li>
        <div className="Message-content">
          <div className="text">{text}</div>
        </div>
        
      </li>
     );
    }
    
  render() {
    const {messages} = this.props;
    
      return (
        <ul className="Messages-list">
          {messages.map(m => this.renderMessage(m))}
        </ul>
      );
  }
}

export default Messages;