import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const contents = ["React", "Node.js", "TypeScript"]
let i=0;

class Cycle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      contents: this.props.contents,
      value: contents[0],
    }
  }
  render(){
    return (
      <a onClick={() => {
        i++
        if(i>2)i=0
        this.setState({value: this.state.contents[i]})
      }}>{this.state.value}</a>
    )
  }
}

const App = () => {
  return (
  <div class="grid">
    <div class="cell hoverable unselectable"><a>Harrison Boon</a></div>
    <div class="cell unselectable invisible"></div>
    <div class="cell unselectable invisible"></div>
    <div class="cell big hoverable unselectable"><a class="boon">Hi there, I'm Boon,<br/>and I am a full-stack <Cycle contents={contents}/> developer</a></div>
  </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));