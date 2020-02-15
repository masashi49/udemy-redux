import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement, readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class EventsIndex extends Component {

  componentDidMount () {
    this.props.readEvents();
  }
  renderEvents () {
    return _.map( this.props.value, ( event, index ) => (
      <tr key={ index }>
        <td>{ event.id }</td>
        <td>{ event.title }</td>
        <td>{ event.body }</td>
      </tr>
    ) )
  }

  render () {
    // 状態やactionをconst propsに入れておく。
    // Providerから渡されたstoreの値が入っている
    const props = this.props
    return (
      <React.Fragment>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            { this.renderEvents() }
          </tbody>
        </table>

        <button onClick={ props.increment }>+31</button>
        <button onClick={ props.decrement }>-1</button>

        <Link to='events/new'>New Event</Link>
      </React.Fragment>
    )
  }
}

//storeから必要なstateを取り出す
const mapStateToProps = state => ( {
  value: state.count,
  events: state.events,
} )


const mapDispatchToProps = ( { increment, decrement, readEvents } )

export default connect( mapStateToProps, mapDispatchToProps )( EventsIndex )
