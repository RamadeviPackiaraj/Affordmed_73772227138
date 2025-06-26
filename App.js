import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="App">
      <h1>Afford Medical Technologies Private Limited</h1>
      <p text-align="center">welcome to our company Afford Medical Technologies Private Limited it provide endless service for users to provide healthcare Services. </p>
      <nav class="nav-bar-horizontal">
        <button type="button" action="onClick">
          <a href="C:Users\User\Desktop\React\affordmed\src\affordmed.html"alt=" ">Home </a>
        </button>
        <button type="button" action="onClick">
          <a href="C:\Users\User\Desktop\React\affordmed\src\affordmed.html">About as</a>
        </button>
        <button type="button" action="onClick">
          <a href="C:\Users\User\Desktop\React\affordmed\src\affordmed.html">Services</a>
        </button> <button type="button" action="onClick">
          <a href="C:\Users\User\Desktop\React\affordmed\src\affordmed.html">Specialists</a>
        </button> <button type="button" action="onClick">
          <a href="C:\Users\User\Desktop\React\affordmed\src\affordmed.html">Appointment form</a>
        </button>
        <button type="button" action="onClick">
          <a href="C:\Users\User\Desktop\React\affordmed\src\affordmed.html">Facilities</a>
        </button>
      </nav>
      <div class="container">

        <card><img src="data:image/jpeg;base64,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"></img></card>
      </div>
      <div class="container">
        <card><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3582tNYw3yYUh2_MGk1FDBA4QFATDbXMrWg&s"></img></card>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
