import React, { Component } from 'react';
import { connect } from "react-redux";
import { getEvent, deleteEvent, putEvent } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class EventsShow extends Component {

    constructor( props ) {
        console.log( 213435 )
        super( props )
        this.onSubmit = this.onSubmit.bind( this )
        this.onDeleteClick = this.onDeleteClick.bind( this )
    }

    componentDidMount () {
        const { id } = this.props.match.params
        if ( id ) this.props.getEvent( id );
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
        await this.props.putEvent( values )
        this.props.history.push( '/' ) // historyに現在のページのURLを追加しつつページ繊維
    }

    async onDeleteClick () {
        const { id } = this.props.match.params // :id　の部分に必要なパラメータを取得できる
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

//ownPropsは現在のprops
const mapStageToProps = ( state, ownProps ) => {
    // state.countは {10: {id: 10, title: "Let's have an event 10!", body: "This is the body for event 10."}}
    // ↑はreducerで初期化された時に入ってくる値となる
    const event = state.count[ ownProps.match.params.id ] //formの初期化処理イベントを丸っと返す
    return { initialValues: event, event } // initialValuesはhttps://qiita.com/sand/items/24bf124106761b2a8aceをみる
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent } )

export default connect( mapStageToProps, mapDispatchToProps )(
    // enableReinitialize: true formの値が変わったらレンダリングする
    reduxForm( {
        validate, form: 'eventShowForm',
        enableReinitialize: true
    } )( EventsShow )
)
