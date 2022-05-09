import { useMemo, useState } from "react"
import { Title } from "./Title"

export function Factorial() {
    const [number, setNumber] = useState(0)
    const [useless, setUseless] = useState(false)

    const factorial = useMemo(() => recursiveFactorial(number), [number])
    function recursiveFactorial(n) {
        console.log('Factorial')
        return n < 1 ? 1 : n * recursiveFactorial(n - 1)
    }


    return (<>
        <Title hook='useMemo' />
        <p>Without useMemo, the factorial is recalculated everytime the theme changes or we click on useless</p>

        <div className="factorial">
            <input
                type="text" name="number" id="number"
                onChange={event => setNumber(parseInt(event.target.value) || 0)} />
            <h3>{factorial}</h3>
            {/* <h3>{recursiveFactorial(number)}</h3> */}

            <button
                type="button"
                onClick={() => setUseless(oldUseless => !oldUseless)}
            >Useless</button>
        </div>
    </>
    )
}