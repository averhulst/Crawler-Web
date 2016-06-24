require("./css/body.css");
require("./css/App.css");
const construction = require("../resources/construction.gif");

import React from 'react';
import ReactDOM from 'react-dom';
import SummaryPanel from './SummaryPanel.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className='App'>
          <div className='App-Construction'>
            <img src='./resources/construction.gif' />
          </div>
          
          <marquee behavior="slide">tomatoes!</marquee>

          <SummaryPanel />

          <marquee direction='right' behavior="alternate">tomatoes!</marquee>
          <marquee direction="down" width="400" height="400" behavior="alternate">
            <marquee behavior="alternate">
              tomatoes!
            </marquee>
          </marquee>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
