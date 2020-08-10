import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const barStyle = {
  "flex-basis": "calc(100% - 80px)",
  "font-size": "8vmin"
}

class Reveal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: this.props.val,
      name: this.props.name,
      value: this.props.name,
    };
  }

  render() {
    return (
      <div
        class="cell"
        onMouseEnter={() => this.setState({value: this.state.val})}
        onMouseLeave={() => this.setState({value: this.state.name})}
      >
        <a>{this.state.value}</a>
      </div>
    );
  }
}

const App = () => {
  return (
  <div class="grid">
    <div class="cell"><a href="https://github.com/boon-cpu">Github</a></div>
    <div class="cell"><a href="https://twitter.com/B00N9999">Twitter</a></div>
    <div class="cell"><a href="https://www.instagram.com/boon_cpuy/">Instergram</a></div>
    <div class="bar unselectable" style={barStyle}><a>boon-cpu</a></div>
    <Reveal val="Boon#0001" name="Discord"/>
    <Reveal val="harrisonboon@gmail.com" name="Email"/>
    <div class="cell"><a>--TBD--</a></div>
  </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));