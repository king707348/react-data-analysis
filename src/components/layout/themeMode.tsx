'use client'

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ColorMode() {
    const { theme, setTheme } = useTheme()

    function changeTheme() {   
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div onClick={changeTheme} className="py-2">
            {theme === "dark" ? <Moon /> : <Sun />}
        </div>
    )
}