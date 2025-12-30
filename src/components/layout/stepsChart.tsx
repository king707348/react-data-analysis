"use client";

import ReactECharts from 'echarts-for-react';

import { InfoData, DayEvent, StepData } from "@/types/index";

export default function StepsChart(
    {useThemeColor, useData}:
    {useThemeColor:string, useData:InfoData[]}
) {
    const data = useData
    const ThemeColor = useThemeColor
    let admin_title: string = "ADMIN INCOME CHART"
    let xAxis_data: string[] = []
    let series_data_Step: number[] = []

    if(data.length > 0){
        admin_title = `${data[0].name.toLocaleUpperCase()}'S STEPS CHART`
        xAxis_data = data[0].date_event.map(event => event.date)
        series_data_Step = data[0].date_event.map(event => {
            return event.fit_activity[0].steps.count
        })
        console.log(series_data_Step)
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
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: xAxis_data,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: ThemeColor
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: ThemeColor
                }
            }
        ],
        series: [
            {
                name: 'Steps',
                type: 'bar',
                barWidth: '60%',
                data: series_data_Step
            }
        ]
    }

    return (
        <>
            <ReactECharts option={option} />
        </>
    )
}