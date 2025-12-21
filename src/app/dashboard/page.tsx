'use client'

import { ColorMode } from "@/components/layout/themeMode"
import Sidebar from "@/components/layout/sidebar"

import { Button } from "@/components/ui/button"

export default function Layout(){

    return (
        <>
            <header className="flex flex-row justify-between w-full p-2 border-b border-gray-200">
                <div className="my-auto">TEST</div>
                <div className="flex flex-row gap-2 ">
                    <ColorMode />
                    <Button >Logout</Button>
                </div>
            </header>

            <Sidebar />
        </>
    )
}