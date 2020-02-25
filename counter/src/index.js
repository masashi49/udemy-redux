import React from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './contexts/counter' //providerを提供してくれている
import Counter from './components/counter' //ちゃんと別のコンポーネントとしてjsを作ろう

class App extends React.Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)

        this.state = {
            count: 0,
            increment: this.increment,
            decrement: this.decrement,
        }
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <CounterContext.Provider value={this.state}> //this.stateがこの中で使えるようになる
                <Counter />
            </CounterContext.Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
