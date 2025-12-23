'use client'

import AssetsChart from "@/components/layout/assetsChart"
import StepsChart from "@/components/layout/stepsChart"
import BloodPressureChart from "@/components/layout/bloodPressureChart"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChartView() {
    return (
        <>
            <Tabs defaultValue="assets" className="w-full">
                <TabsList>
                    <TabsTrigger value="assets">Assets</TabsTrigger>
                    <TabsTrigger value="steps">Steps</TabsTrigger>
                    <TabsTrigger value="bloodPressure">Blood Pressure</TabsTrigger>
                </TabsList>
                <TabsContent value="assets">
                    <AssetsChart />
                </TabsContent>
                <TabsContent value="steps">
                    <StepsChart />
                </TabsContent>
                <TabsContent value="bloodPressure">
                    <BloodPressureChart />
                </TabsContent>
            </Tabs> 
        </>
    )
}