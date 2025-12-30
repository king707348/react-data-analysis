'use client'

import React, { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { dataStore } from "@/stores/index"
import { ColumnDef } from "@tanstack/react-table"
import { useTranslations } from "next-intl"

import { ChartView } from "./chartview"
import { DataTable } from "./recordDate"
import { CardEvent } from "./cardEvent"

import { RecordDate, CardData, InfoData, DayEvent } from "@/types/index";

export default observer(function DashboardOverview() {
    const [data, setData] = useState<InfoData | null>(null)
    const [loading, setLoading] = useState(true)
    const t = useTranslations();

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
    
    const everyMonth = (!loading && data) 
        ? data.date_event.reduce((acc, event) => {
            const amount = event.month_amount.income?.[0]?.amount || 0

            return acc + amount
        }, 0)
        : 0

    const totalAssets = (!loading && data) 
        ? data.prevent_assets + everyMonth 
        : 0
    
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

    const cardData: CardData[] = [
        {
            title: t("cards.Assets.name"),
            action: t("cards.Assets.action"),
            unit: t("cards.Assets.unit"),
            getData: totalAssets
        },
        {
            title: t("cards.Steps.name"),
            action: t("cards.Steps.action"),
            unit: t("cards.Steps.unit"),
            getData: 12000
        },
        {
            title: t("cards.BloodPressure.name"),
            action: t("cards.BloodPressure.action"),
            unit: "",
            getData: "130/78"
        },
        {
            title: t("cards.Aappointment.name"),
            action: t("cards.Aappointment.action"),
            unit: "",
            getData: "2026/01/07"
        }
    ]

    return (
        <div className="w-full m-1">
            <div className="card-overview flex flex-wrap ">
                {cardData.map((card: CardData, index: number) => (
                    <CardEvent 
                        key={index}
                        title={card.title}
                        action={card.action}
                        unit={card.unit}
                        getData={card.getData}
                    />
                ))}
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