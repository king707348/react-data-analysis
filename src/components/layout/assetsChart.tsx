"use client";

import React, {useState, useEffect} from "react";
import ReactECharts from 'echarts-for-react';

import { StepData, Income, Expenses, DayEvent, InfoData } from "@/types/index";

const fetchData = async (setData: React.Dispatch<React.SetStateAction<InfoData[]>>) => {
    try {
        const response = await fetch('/api/info')
        const jsonData = await response.json()

        setData(jsonData)
        console.log(jsonData[0])
    }catch (err) {
        console.error("err", err)
    }
}

export default function AssetsChart() {
    const [data, setData] = useState<InfoData[]>([])
    let admin_title: string = "ADMIN INCOME CHART"
    let xAxis_data: string[] = []
    let series_data_Income: number[] = []
    let series_data_Expenses: number[] = []

    useEffect(() => {
        fetchData(setData)
    }, [])

    if(data.length > 0){
        admin_title = `${data[0].name.toLocaleUpperCase()}'S STEPS CHART`
        xAxis_data = data[0].date_event.map(event => event.date)
        series_data_Income = data[0].date_event.map(event => {
            return event.month_amount.income[0].amount
        })
        series_data_Expenses = data[0].date_event.map(event => {
            return event.month_amount.expenses[0].amount
        })
    }

    const option = {
        title: {
            text: admin_title,
            left: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: xAxis_data
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Income',
                data: series_data_Income,
                type: 'line',
                itemStyle: {
                    color: '#5470C6'
                }
            },
            {
                name: 'Expenses',
                data: series_data_Expenses,
                type: 'line',
                itemStyle: {
                    color: '#c86247'
                }
            }
        ]
    }

    return (
        <>
            <ReactECharts option={option} notMerge={true} lazyUpdate={true} />
        </>
    )
}