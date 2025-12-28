'use client'

import ChartView from "./chartview"
import { DataTable } from "./recordDate"

import React, { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { dataStore } from "@/stores/index"
import { Card, CardHeader, CardTitle, CardContent, CardAction } from "../ui/card"
import { ColumnDef } from "@tanstack/react-table"

import { InfoData, DayEvent } from "@/types/index";

export default observer(function DashboardOverview() {
    const [data, setData] = useState<InfoData | null>(null)
    const [loading, setLoading] = useState(true)

    type RecordDate = {
        id: number;
        status: string;
        event: string;
    }

    const columns:ColumnDef<RecordDate>[] = [
            {
                accessorKey: "id",
                header: "ID",
            },
            {
                accessorKey: "status",
                header: "Status",
            },
            {
                accessorKey: "event",
                header: "Event",
            }
    ];

    const recordDate = [
        {
            id: 1,
            status: "Completed",
            event: "Blood Test",
        },{
            id: 2,
            status: "Completed",
            event: "Blood Test2",
        },{
            id: 3,
            status: "Completed",
            event: "Blood Test3",

        }
    ]

    const loadData = async () => {
        const result = await dataStore.fetchData()
        if (result) {
            setData(result[0])
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    if (!loading) {
        console.log("dashboard overview data:", data)
        const everyMonth = data?.date_event.map((event: DayEvent) => event.month_amount.income[0].amount)
        const totalAssets = data?.prevent_assets
        console.log(everyMonth, totalAssets)
    }


    return (
        <div className="w-full m-1">
            <div className="card-overview flex flex-wrap ">
                <Card className="flex-1 min-w-40 m-1">
                    <CardHeader className="px-2" >
                        <CardTitle>總資產</CardTitle>
                        <CardAction className="text-[.75rem]">Assets</CardAction>
                    </CardHeader>
                    <CardContent className="text-1 sm:text-2 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                        {Number(10000000).toLocaleString()}<small>/usd</small>
                    </CardContent>
                </Card>
                <Card className="flex-1 min-w-40 m-1">
                    <CardHeader className="px-2" >
                        <CardTitle>步數</CardTitle>
                        <CardAction className="text-[.75rem]">steps</CardAction>
                    </CardHeader>
                    <CardContent className="text-1 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                        {Number(12000).toLocaleString()}<small>/steps</small>
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

            <div className="my-2 mx-1 p-2 rounded-lg shadow-md">
                <ChartView />
            </div>

            <div>
                <DataTable
                    columns={columns}
                    data={recordDate}
                />
            </div>
        </div>
    )
})