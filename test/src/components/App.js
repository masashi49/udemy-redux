import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement } from '../actions'

class App extends Component {
  render () {
    // 状態やactionをconst propsに入れておく。
    // Providerから渡されたstoreの値が入っている
    const props = this.props
    console.log( props )
    return (
      <div>
        Value { props.value } <br />
        <button onClick={ props.increment }>+31</button>
        <button onClick={ props.decrement }>-1</button>
      </div>
    )
  }
}

//storeから必要なstateを取り出す
const mapStateToProps = state => ( { value: state.count.value } )
// const mapDispatchToProps = dispatch => ( {
//   increment: () => dispatch( increment() ),
//   decrement: () => dispatch( decrement() ),
// } )

const mapDispatchToProps = ( { increment, decrement } )

export default connect( mapStateToProps, mapDispatchToProps )( App )
