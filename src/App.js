import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import './chatbox.css'
import ChatBox from './components/chatbox'
import ChatWindow from './components/chatwindow'

class App extends Component {
  render() {
    return (
      <div>
        <ChatBox />
        <ChatWindow />
      </div>
    );
  }
}

export default App;
