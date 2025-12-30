'use client'

import React, {useState, useEffect} from "react";
import { observer } from "mobx-react-lite";
import { dataStore } from "@/stores/index";
import { useTheme } from 'next-themes';

import AssetsChart from "@/components/layout/assetsChart"
import StepsChart from "@/components/layout/stepsChart"
import BloodPressureChart from "@/components/layout/bloodPressureChart"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { InfoData } from "@/types/index";

export const ChartView = observer(() => {
    const { resolvedTheme } = useTheme()
    
    const themeColor = resolvedTheme === 'dark' ? '#ffffff' : '#235894'
    const [data, setData] = useState<InfoData[]>([])

    useEffect(() => {
        const loadData = async () => {
            const result = await dataStore.fetchData()
            if (result) setData(result)
        }
        loadData()
    }, [])

    return (
        <>
            <Tabs defaultValue="assets" className="w-full">
                <TabsList>
                    <TabsTrigger value="assets">Assets</TabsTrigger>
                    <TabsTrigger value="steps">Steps</TabsTrigger>
                    <TabsTrigger value="bloodPressure">Blood Pressure</TabsTrigger>
                </TabsList>
                <TabsContent value="assets">
                    <AssetsChart useThemeColor={themeColor} useData={data} />
                </TabsContent>
                <TabsContent value="steps">
                    <StepsChart useThemeColor={themeColor} useData={data} />
                </TabsContent>
                <TabsContent value="bloodPressure">
                    <BloodPressureChart useThemeColor={themeColor} useData={data} />
                </TabsContent>
            </Tabs> 
        </>
    )
})