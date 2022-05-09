import { useReducer } from "react"
import { Detail } from "./Detail"
import { Title } from "./Title"

function reducer(state, action) {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return 0
        default:
            throw new Error('action not defined')
    }
}

export function Counter() {
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <Title hook='useReducer' />
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch('decrement')}>-</button>
                <button onClick={() => dispatch('reset')}>0</button>
                <button onClick={() => dispatch('increment')}>+</button>
            </div>
        </div>
    )
}