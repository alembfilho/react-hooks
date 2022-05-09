import { useContext } from "react"
import { DarkModeContext, themeClass } from "../theme"

export function ThemeButtom({ setDarkMode }) {
    const isDark = useContext(DarkModeContext)
    return (
        <button
            type='button'
            className={themeClass(isDark)}
            onClick={() => setDarkMode(prevMode => !prevMode)}
        >Change theme</button>
    )
}