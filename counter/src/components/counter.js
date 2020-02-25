import React from 'react'
import CounterContext from '../contexts/counter'

// Providerの子供Consumerは関数を実装する必要がある
// Consumerは値を受け取る事を前提としている設計、受け取り方は関数の引数のためこの形となる。今回の引数は{count ,increment,decrement}

const Counter = () => (
    <CounterContext.Consumer>
        {
            ({ count, increment, decrement }) => {
                return (
                    <React.Fragment>
                        count : {count}
                        <button onClick={increment}></button>
                        <button onClick={decrement}></button>
                    </React.Fragment>
                )
            }
        }
    </CounterContext.Consumer>
)
export default Counter
