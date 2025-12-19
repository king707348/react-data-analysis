"use client"

import Image from "next/image";
import Link from "next/link";

import React, { useState, useEffect } from "react"

interface ChartData {
  date: string;
  price: number;
}
    

    const fetch_data = async (setData: React.Dispatch<React.SetStateAction<ChartData[]>>) => {
        try {
            const response = await fetch("../api/stock")
            const jsonData = await response.json()

            console.log(jsonData)
            setData(jsonData)
        }catch(err){
            console.error("err", err)
        }
    }

export default function Page(){
    const [data, setData] = useState<ChartData[]>([])

    useEffect(() => {
        fetch_data(setData)
    },[])

    return (
        <div>
            test
        </div>
    )
}