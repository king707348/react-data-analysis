"use client";

import ReactECharts from 'echarts-for-react';

import { StepData, Income, Expenses, DayEvent, InfoData } from "@/types/index";

export default function AssetsChart(
    {useThemeColor, useData}:
    {useThemeColor:string, useData:InfoData[]}
) {
    const data = useData
    const ThemeColor = useThemeColor
    let admin_title: string = "ADMIN INCOME CHART"
    let xAxis_data: string[] = []
    let series_data_Income: number[] = []
    let series_data_Expenses: number[] = []


    if(data.length > 0){
        admin_title = `${data[0].name.toLocaleUpperCase()}'S ASSETS CHART`
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
            left: 'center',
            textStyle: {
                color: ThemeColor
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Income', 'Expenses'],
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