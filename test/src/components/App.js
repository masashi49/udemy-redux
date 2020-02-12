import React, { Component } from 'react';

//componentを作った
const User = ( props ) => {
  return (
    <div>
      名前は { props.name } 年齢は{ props.age }</div>
  )
}

class Counter extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      count: 0
    }
  }

  handolePlusButton = () => {
    this.setState( {
      count: this.state.count + 1
    }
    )
  }
  handoleMinusButton = () => {
    this.setState( {
      count: this.state.count - 1
    }
    )
  }
  render () {
    console.log()
    return (
      <div>
        Counter { this.state.count } <br />
        <button onClick={ this.handolePlusButton }>+1</button>
        <button onClick={ this.handoleMinusButton }>-1</button>
      </div>
    )
  }
}

const App = () => {

  let i = 0;
  let v = 0;

  const profiles = [
    { name: 'TARO', age: 10 },
    { name: 'HANALP', age: 9 },
    { name: 'TOYOTA', age: 3243 },
    { name: 'NoName' },
  ]

  return (
    <React.Fragment>
      {
        //親から子にpropsで値を渡す
        //propsの名前はキャメルケースを使う name-joinはだめ
        profiles.map( ( profile, index ) => {
          return <User name={ profile.name } age={ profile.age } key={ index } />
        } )
      }

      <label htmlFor="text_area">文字を入力</label>
      <input id="text_area" type="text" onChange={ () => console.log( i++ ) } /> <br />
      <button onClick={ () => console.log( v++ ) } >console.logが増える</button>


      <Counter />


    </React.Fragment >
  )
}

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }


export default App;
