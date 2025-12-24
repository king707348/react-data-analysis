'use client'

import ChartView from "./chartview"

import React, { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { dataStore } from "@/stores/index"
import { Card, CardHeader, CardTitle, CardContent, CardAction } from "../ui/card"

import { InfoData, DayEvent } from "@/types/index";

export default observer(function DashboardOverview() {
    const [data, setData] = useState<InfoData | null>(null)
    const [loading, setLoading] = useState(true)

    const loadData = async () => {
        const result = await dataStore.fetchData()
        if (result){
            setData(result[0])
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    if(!loading) {
        console.log("dashboard overview data:", data)
        const everyMonth = data?.date_event.map((event: DayEvent) => event.month_amount.income[0].amount)
        const totalAssets = data?.prevent_assets
        console.log(everyMonth, totalAssets)
    }


    return (
        <div className="w-full">
            <div className="card-overview flex flex-wrap m-1">
                <Card className="flex-1 min-w-40 m-1">
                    <CardHeader className="px-2" >
                        <CardTitle>總資產</CardTitle>
                        <CardAction className="text-[.75rem]">Assets</CardAction>
                    </CardHeader>
                    <CardContent className="text-1 sm:text-2 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                        10000000<small>/usd</small>
                    </CardContent>
                </Card>
                <Card className="flex-1 min-w-40 m-1">
                    <CardHeader className="px-2" >
                        <CardTitle>步數</CardTitle>
                        <CardAction className="text-[.75rem]">steps</CardAction>
                    </CardHeader>
                    <CardContent className="text-1 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                        12000<small>/steps</small>
                    </CardContent>
                </Card>
                <Card className="flex-1 min-w-40 m-1">
                    <CardHeader className="px-2" >
                        <CardTitle>血壓</CardTitle>
                        <CardAction className="text-[.75rem]">Blood Pressure</CardAction>
                    </CardHeader>
                    <CardContent className="text-1 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                        130/78
                    </CardContent>
                </Card>
                <Card className="flex-1 min-w-40 m-1">
                    <CardHeader className="px-2" >
                        <CardTitle>回診預約</CardTitle>
                        <CardAction className="text-[.75rem]">提前一周抽血</CardAction>
                    </CardHeader>
                    <CardContent className="text-1 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                        2026/01/07
                    </CardContent>
                </Card>
            </div>

            <div>
                <ChartView />
            </div>
        </div>
    )
})