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
const Hoge = () => {
  return (
    <div>Nwa</div>
  )
}

const App = () => {

  let i = 0;
  let v = 0;

  return (
    <React.Fragment>
      <h1 className="App">
        <Hoge /><Hoge /><Hoge /><Hoge />
      </h1>
      <label htmlFor="text_area">文字を入力</label>
      <input id="text_area" type="text" onChange={() => console.log(i++)} /> <br />
      <button onClick={() => console.log(v++)} >console.logが増える</button>
    </React.Fragment >
  )
}

export default App;
