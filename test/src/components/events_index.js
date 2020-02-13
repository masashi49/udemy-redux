import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement, readEvents } from '../actions'

class EventsIndex extends Component {

  componentDidMount () {
    console.log( 12324 )
    this.props.readEvents();
  }

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


const mapDispatchToProps = ( { increment, decrement, readEvents } )

export default connect( mapStateToProps, mapDispatchToProps )( EventsIndex )
