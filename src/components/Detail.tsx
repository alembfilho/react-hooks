import { useContext } from "react"
import { DarkModeContext, themeClass } from "../theme"

export function Detail({ text }) {
    const isDark = useContext(DarkModeContext)
    return <span className={themeClass(isDark)}>{text}</span>
}