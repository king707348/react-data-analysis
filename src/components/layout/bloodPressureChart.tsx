"use client";

import ReactECharts from 'echarts-for-react';

import { BloodPressure, DayEvent, InfoData } from "@/types/index";

export default function BloodPressureChart(
    {useThemeColor, useData}:
    {useThemeColor:string, useData:InfoData[]}
) {
    const data = useData
    const ThemeColor = useThemeColor
    let admin_title: string = "ADMIN BLOOD PRESSURE CHART"
    let xAxis_data: string[] = []
    let series_data_Systolic: number[] = []
    let series_data_Diastolic: number[] = []

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
            left: 'center',
            textStyle: {
                color: ThemeColor
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Systolic', 'Diastolic'],
            textStyle: {
                color: ThemeColor
            }
        },
        xAxis: {
            type: 'category',
            data: xAxis_data,
            axisLabel: {
                color: ThemeColor
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: ThemeColor
            }
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