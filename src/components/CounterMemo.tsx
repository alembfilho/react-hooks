import { memo, useCallback, useReducer, useState } from "react";
import { Title } from "./Title";

const IncrementButton = memo(({ increment }: { increment: () => void }) => {
    console.log('Increment Button')

    return (
        <button onClick={increment}>Increment</button>
    )
})

const ResetButton = memo(({ reset }: { reset: () => void }) => {
    console.log('Reset Button')

    return <button onClick={reset}>reset</button>
})



export function CounterMemo() {
    const [value, dispatch] = useReducer((state, action) => action === 'reset' ? 0 : state + 1, 0)
    // const [value, setValue] = useState(0)
    // const handleIncrement = useCallback(() => { setValue(value + 1) }, [value])
    // const handleReset = useCallback(() => { setValue(0) }, [])
    const handleIncrement = useCallback(() => dispatch('increment'), [])
    const handleReset = useCallback(() => dispatch('reset'), [])

    console.log('Render counter')

    return (
        <div>
            <Title hook='useCallback' />
            <div>{value}</div>
            <IncrementButton increment={handleIncrement} />
            <ResetButton reset={handleReset} />
        </div>
    )
}