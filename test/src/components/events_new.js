import React, { Component } from 'react';
import { connect } from "react-redux";
//import { postEvent } from '../actions'

class EventsNew extends Component {

    render () {
        const props = this.props
        return (
            <React.Fragment>
                こんんちを
            </React.Fragment>
        )
    }
}

// const mapDispatchToProps = ( { postEvents } )

export default connect( null, null )( EventsNew )
