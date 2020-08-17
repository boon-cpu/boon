import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const boon = "https://cdn.discordapp.com/attachments/733615460108599326/744492234048798780/v_-_Copy.png?size=128"

const App = () => {
  return (
    <div class="App">
      <div class="container">
        <h1>Hello. <img src={boon}/></h1>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));