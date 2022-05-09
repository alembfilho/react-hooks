import { createContext } from 'react'

export const DarkModeContext = createContext(false)

export const themeClass = isDark => isDark ? 'dark' : 'light'