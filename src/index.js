import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const boon = "https://cdn.discordapp.com/attachments/733615460108599326/744492234048798780/v_-_Copy.png?size=128"
let i = 0;

const Intro = () => {
  return(
    <h1 id="intro">Hello. <img onClick={() => {
      if (i % 2 === 0) {
        document.getElementById('App').style.background = '#111111'
        document.getElementById('intro').style.color = '#FFFFFF'
        i+=1;
      } else {
        document.getElementById('App').style.background = '#FFFFFF'
        document.getElementById('intro').style.color = '#111111'
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