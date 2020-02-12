import React from 'react';

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
      名前は { props.nameJoin } 年齢は{ props.age }</div>
  )
}

const App = () => {

  let i = 0;
  let v = 0;

  const profiles = [
    { name: 'TARO', age: 10 },
    { name: 'HANAKO', age: 9 },
    { name: 'TOYOTA', age: 39 },
    { name: 'NoName' },
  ]

  return (
    <React.Fragment>
      {
        //親から子にpropsで値を渡す
        //propsの名前はキャメルケースを使う name-joinはだめ
        profiles.map( ( profile, index ) => {
          return <User nameJoin={ profile.name } age={ profile.age } key={ index } />
        } )
      }

      <label htmlFor="text_area">文字を入力</label>
      <input id="text_area" type="text" onChange={ () => console.log( i++ ) } /> <br />
      <button onClick={ () => console.log( v++ ) } >console.logが増える</button>
    </React.Fragment >
  )
}


User.defaultProps = {
  age: 1
}


export default App;
