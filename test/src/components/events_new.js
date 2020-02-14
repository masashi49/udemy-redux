import React, { Component } from 'react';
import { connect } from "react-redux";
//import { postEvent } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class EventsNew extends Component {

    renderField ( field ) {
        const { input, label, type, meta: { touched, error } } = field
        return (
            <div>
                <input { ...input } placeholder={ label } type={ type } />
                { touched && error && <span>{ error }</span> }
            </div> )
    }
    render () {
        const props = this.props
        return (
            <form>
                <div>
                    <Field label="Title" name="title" type="text" component={ this.renderField } />
                    <Field label="Body" name="body" type="text" component={ this.renderField } />
                </div>
                <input type="submit" value="Submit" disabled={ false } />
                <Link to='/'>Cancel</Link>
            </form>
        )
    }
}

// const mapDispatchToProps = ( { postEvents } )

//空チェック
const validate = values => {
    const errors = {}

    if ( !values.title ) errors.title = 'タイトルを入れて下さい'
    if ( !values.body ) errors.body = '本文を入れて下さい'
    return errors
}

export default connect( null, null )(
    reduxForm( { validate, form: 'eventNewForm' } )( EventsNew )
)
