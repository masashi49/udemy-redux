import React, { Component } from 'react';
import { connect } from "react-redux";
import { getEvent, deleteEvent, putEvent } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class EventsShow extends Component {

    constructor( props ) {
        console.log( 213435 )
        super( props )
        this.onSubmit = this.onSubmit.bind( this ) // 関数でthisにアクセスするための決まり文句
        this.onDeleteClick = this.onDeleteClick.bind( this ) // 関数でthisにアクセスするための決まり文句
        //Object.getOwnPropertyNames( this.__proto__ ).forEach( func =>
        //  this[ func ] = this[ func ].bind( this )
        // )
    }

    renderField ( field ) {
        const { input, label, type, meta: { touched, error } } = field
        return (
            <div>
                <input { ...input } placeholder={ label } type={ type } />
                { touched && error && <span>{ error }</span> }
            </div>
        )
    }

    async onSubmit ( values ) {
        await this.props.postEvent( values )
        this.props.history.push( '/' ) // historyに現在のページのURLを追加しつつページ繊維
    }

    async onDeleteClick () {
        console.log( this.props.match ) // :id　の部分に必要なパラメータを取得できる
        const { id } = this.props.match.params
        await this.props.deleteEvent( id )
        //this.props.history.push( '/' ) // historyに現在のページのURLを追加しつつページ繊維
    }

    render () {
        const { handleSubmit, pristine, submitting } = this.props

        // handoleSubmitはreduxForm を component と紐付けることで実装されるハンドラ 
        return (
            <form onSubmit={ handleSubmit( this.onSubmit ) }>
                <div>
                    <Field label="Title" name="title" type="text" component={ this.renderField } />
                    <Field label="Body" name="body" type="text" component={ this.renderField } />
                </div>
                <input type="submit" value="Submit" disabled={ pristine || submitting } />
                <Link to='/'>Cancel</Link>
                <Link to='/' onClick={ this.onDeleteClick }>DELETE</Link>
            </form>
        )
    }
}


//空チェック
const validate = values => {
    const errors = {}

    if ( !values.title ) errors.title = 'タイトルを入れて下さい'
    if ( !values.body ) errors.body = '本文を入れて下さい'
    return errors
}

const mapDispatchToProps = ( { deleteEvent } )

export default connect( null, mapDispatchToProps )(
    reduxForm( { validate, form: 'eventShowForm' } )( EventsShow )
)
