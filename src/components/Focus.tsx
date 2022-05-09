import { useRef } from "react";
import { Title } from "./Title";

export function Focus() {
    const inputEl = useRef(null)
    return (<>
        <Title hook='useRef' />
        <input type="text" ref={inputEl} />
        <button type="button" onClick={() => inputEl.current.focus()}>Click here to focus the input</button>
    </>)
}