import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const boon = "https://cdn.discordapp.com/attachments/434428050873122827/745092557041565898/v_-_Copy_1.png"
let i = 0;

const Intro = () => {
  return(
    <h1 id="intro">Hello. <img onClick={() => {
      if (i % 2 === 0) {
        document.getElementById('App').style.background = '#222831'
        document.getElementById('intro').style.color = "#FBD46D"
        i+=1;
      } else {
        document.getElementById('App').style.background = "#EEEEEE"
        document.getElementById('intro').style.color = "#4F8A8B"
        i+=1;
      }
    }}src={boon} alt=""/></h1>
  )
}

const App = () => {
  return (
    <div className="App" id="App">
      <div className="header">
        <Intro/>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));