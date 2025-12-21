"use client"

import Image from "next/image";
import Link from "next/link";

import React, { useState, useEffect } from "react"

interface ChartData {
    date: string;
    price: number;
}

const fetch_data = async (
    setData: React.Dispatch<React.SetStateAction<ChartData[]>>
) => {
    try {
        const response = await fetch("../api/stock")
        const jsonData = await response.json()

        console.log(jsonData)
        setData(jsonData)
    } catch (err) {
        console.error("err", err)
    }
}

export default function Page() {
    const [data, setData] = useState<ChartData[]>([])

    useEffect(() => {
        fetch_data(setData)

    }, [])

    return (
        <div className="p-4">
            <h1>資料列表</h1>

            {data.length == 0 ? (
                <p>Loading...</p>
            ) : (
                data.map((item, index) => (
                    <div key={index}>
                        <p>日期: {item.date}</p>
                        <p>價格: {item.price}</p>
                    </div>
                ))
            )}
        </div>
    )
}