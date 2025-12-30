'use client'

import React, { Dispatch, SetStateAction, useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface childPros {
    date: string,
    price: number
}

async function login_btn(
    setApiData:React.Dispatch<React.SetStateAction<childPros[]>>,
    setLoading:React.Dispatch<React.SetStateAction<boolean>>
) {
    try {
        const fetch_data = await fetch("/api/stock")
        const db = await fetch_data.json()

        setApiData(db)
    }catch(err) {
        console.log("err",err)
    }finally{
        setLoading(false)
    }
}

export default function Layout(){
    const [loading, setLoading] = useState<boolean>(true)
    const [apiData, setApiData] = useState<childPros[]>([])

    return (
        <>
            <h3>Login</h3>
            <Button onClick={() => login_btn(setApiData, setLoading)}>登入</Button>
            <Link href="/api/fitbit/login" >xxx</Link>
            {loading == false && apiData.map((db,index) => (
                <div key={index}>
                    {db.date}
                </div>
            ))
            
            }
        </>
    )
}