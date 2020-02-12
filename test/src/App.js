import React from 'react';
import PropTypes from 'prop-types'

// class App extends Component {
//   render () {
//     return (
//       <h1 className="App">
//         hello testasfasdf
//     </h1>
//     )
//   };
// }

//componentを作った
const User = ( props ) => {
  return (
    <div>
      名前は { props.name } 年齢は{ props.age }</div>
  )
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
    </React.Fragment >
  )
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}


export default App;
