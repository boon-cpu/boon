import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const boon: string = "https://cdn.discordapp.com/attachments/733615460108599326/744492234048798780/v_-_Copy.png"
let i: number = 0;

const Intro = () => {
  return(
    <h1 className="light" id="intro">Hello. <img className="light" onClick={() => {
      if (i % 2 === 0) {
        const lights = document.querySelectorAll('.light');
        for (let i = 0; i < lights.length; i++) { 
          lights.item(i)!.classList.add("dark")
          lights.item(i)!.classList.remove("light")
        }
        document.getElementById('App')!.style.background = '#222831'
        document.getElementById('intro')!.style.color = "#FBD46D"
        document.getElementById('body')!.style.color = "#FBD46D"
        document.getElementById('body2')!.style.color = "#FBD46D"
        document.getElementById('github')!.style.color = "#FBD46D"
        document.getElementById('twitter')!.style.color = "#FBD46D"
        i+=1;
      } else {
        const darks = document.querySelectorAll('.dark');
        for (let i = 0; i < darks.length; i++) {
          darks.item(i)!.classList.add("light")
          darks.item(i)!.classList.remove("dark")
        }
        document.getElementById('App')!.style.background = "#EEEEEE"
        document.getElementById('intro')!.style.color = "#4F8A8B"
        document.getElementById('body')!.style.color = "#4F8A8B"
        document.getElementById('body2')!.style.color = "#4F8A8B"
        document.getElementById('github')!.style.color = "#4F8A8B"
        document.getElementById('twitter')!.style.color = "#4F8A8B"
        i+=1;
      }
    }}src={boon} alt=""/></h1>
  )
}

const Body = () => {
  return(
    <div>
      <p id="body" className="light">I'm a 15 year old dev from the UK.<br className="light"/>I aim to innovate and improve every solution to any problem.</p>
      <p id="body2" className="light">I specialise in Node, React and Typescript development,<br className="light"/>but still maintain knowledge in others.</p>
    </div>
  )
}

const Links = () => {
  return(
    <div className="linkBar">
      <a className="light" href="https://github.com/boon-cpu" id="github">Github</a>
      <a className="light" href="https://twitter.com/B00N9999" id="twitter">Twitter</a>
    </div>
  )
}

const App = () => {
  return (
    <div className="App light" id="App">
      <div className="header light" id="header">
        <Intro/>
      </div>
      <div className="body light" id="bodyContainer">
        <Body />
      </div>
      <div className="links light" id="links">
        <Links />
      </div>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));