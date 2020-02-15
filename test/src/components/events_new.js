import React, { Component } from 'react';
import { connect } from "react-redux";
import { postEvent } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class EventsNew extends Component {

    constructor( props ) {
        super( props )
        this.onSubmit = this.onSubmit.bind( this ) // 関数でthisにアクセスするための決まり文句
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

    //各フィールド値が入ったオブジェクトをredux-formが渡してくれます
    async onSubmit ( values ) {
        await this.props.postEvent( values )
        this.props.history.push( '/' ) // historyに現在のページのURLを追加しつつページ繊維
    }

    render () {
        //redux-formから提供されているpristine フォーム内のフィールドがまだ変更されていない
        //redux-formから提供されているsubmitting 1つのイベントしか作成されない(連打できない)

        const { handleSubmit, pristine, submitting } = this.props

        // handoleSubmitはreduxForm を component と紐付けることで実装されるハンドラ 
        return (
            <form onSubmit={ handleSubmit( this.onSubmit ) }>
                <div>
                    <Field label="Title" name="title" type="text" component={ this.renderField } />
                    <Field label="Body" name="body" type="text" component={ this.renderField } />
                    <Field label="HEAD" name="HEAD" type="text" component={ this.renderField } />
                    <Field label="NEIC" name="neic" type="text" component={ this.renderField } />
                </div>
                <input type="submit" value="Submit" disabled={ pristine || submitting } />
                <Link to='/'>Cancel</Link>
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

const mapDispatchToProps = ( { postEvent } )

export default connect( null, mapDispatchToProps )(
    reduxForm( { validate, form: 'eventNewForm' } )( EventsNew )
)
