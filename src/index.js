import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const boon = "https://cdn.discordapp.com/attachments/733615460108599326/744492234048798780/v_-_Copy.png"
let i = 0;

const Intro = () => {
  return(
    <h1 id="intro">Hello. <img onClick={() => {
      if (i % 2 === 0) {
        document.getElementById('App').style.background = '#222831'
        document.getElementById('intro').style.color = "#FBD46D"
        document.getElementById('body').style.color = "#FBD46D"
        document.getElementById('body2').style.color = "#FBD46D"
        i+=1;
      } else {
        document.getElementById('App').style.background = "#EEEEEE"
        document.getElementById('intro').style.color = "#4F8A8B"
        document.getElementById('body').style.color = "#4F8A8B"
        document.getElementById('body2').style.color = "#4F8A8B"
        i+=1;
      }
    }}src={boon} alt=""/></h1>
  )
}

const Body = () => {
  return(
    <div>
      <p id="body">I'm a 15 year old dev from the UK.<br/>I aim to innovate and improve every solution to any problem.</p>
      <p id="body2">I specialise in Node, React and Typescript development,<br/>but still maintain knowledge in others.</p>
    </div>
  )
}

const App = () => {
  return (
    <div className="App" id="App">
      <div className="header">
        <Intro/>
      </div>
      <div className="body">
        <Body />
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));