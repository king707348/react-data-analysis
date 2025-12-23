"use client";

import React, {useState, useEffect} from "react";
import ReactECharts from 'echarts-for-react';

import { BloodPressure, DayEvent, InfoData } from "@/types/index";

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

export default function BloodPressureChart() {
    const [data, setData] = useState<InfoData[]>([])
    let admin_title: string = "ADMIN BLOOD PRESSURE CHART"
    let xAxis_data: string[] = []
    let series_data_Systolic: number[] = []
    let series_data_Diastolic: number[] = []

    useEffect(() => {
        fetchData(setData)
    }, [])

    if(data.length > 0){
        admin_title = `${data[0].name.toLocaleUpperCase()}'S BLOOD PRESSURE CHART`
        xAxis_data = data[0].date_event.map(event => event.date)
        series_data_Systolic = data[0].date_event.map(event => {
            return event.fit_activity[0].blood_pressure.systolic
        })
        series_data_Diastolic = data[0].date_event.map(event => {
            return event.fit_activity[0].blood_pressure.diastolic
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
        legend: {
            data: ['Systolic', 'Diastolic']
        },
        xAxis: {
            type: 'category',
            data: xAxis_data
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'Systolic',
                data: series_data_Systolic,
                type: 'line',
                itemStyle: {
                    color: '#5470C6'
                }
            },
            {
                name: 'Diastolic',
                data: series_data_Diastolic,
                type: 'line',
                itemStyle: {
                    color: '#c86247'
                }
            },
            {
                name: 'Max Systolic Threshold',
                data: Array(xAxis_data.length).fill(130),
                type: 'line',
                lineStyle: {
                    type: 'dashed',
                    width: 2,
                    color: '#fc1326',
                },
                itemStyle: {
                    color: '#fc1326'
                }
            },
            {
                name: 'Max Diastolic Threshold',
                data: Array(xAxis_data.length).fill(80),
                type: 'line',
                lineStyle: {
                    type: 'dashed',
                    width: 2,
                    color: '#fc1326',
                },
                itemStyle: {
                    color: '#fc1326'
                }
            }
        ]
    }

    return (
        <>
            <ReactECharts option={option} />
        </>
    )
}