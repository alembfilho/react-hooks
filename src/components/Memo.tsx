import { memo, useState } from "react";
import { Title } from "./Title";

const DetailMemo = memo(({ text }: { text: string }) => {
    console.log('Render memo')
    const [state, setState] = useState(false)

    return <>
        <h3>{text}</h3>
        <button type='button' onClick={() => setState(prev => !prev)}>{String(state) + ' state'}</button>
    </>
})

function Dummie() {
    console.log('Render dummie')
    return <h3>dummie</h3>
}

export function Memo() {
    const [value, setValue] = useState(0)
    const [state, setState] = useState(false)

    console.log('Render general')

    return (
        <div>
            <Title hook='React.memo' />
            <div>{value}</div>
            <Dummie />
            <DetailMemo text={state ? 'prop' : 'other prop'} />
            <button type='button' onClick={() => setState(prev => !prev)}>{String(state) + ' props'}</button>
            <button type='button' onClick={() => setValue(prev => prev + 1)}>{String(value) + ' value'}</button>
        </div>
    )
}