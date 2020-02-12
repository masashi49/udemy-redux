import React, { Component } from 'react';
import { element } from 'prop-types';

class App extends Component {
  render () {
    const greeeiing = 'hiiiiiiiiiii'
    const dom = <span>{ greeeiing }</span>

    return (
      <React.Fragment>
        <h1 className="App is_first">
          hello testasfasdf { dom }
        </h1>
        <button onClick={ () => { console.log( 100 ) } }>アロー関数でonclickイベントを埋め込める</button>

        <label htmlFor="testInput">てst</label>
        <input id="testInput" onChange={ () => { console.log( 123243 ) } } />
      </React.Fragment>
    )
  };
}

export default App;
