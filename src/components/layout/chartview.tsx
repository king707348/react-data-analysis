'use client'

import AssetsChart from "@/components/layout/assetsChart"
import StepsChart from "@/components/layout/stepsChart"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChartView() {
    return (
        <>
            <Tabs defaultValue="assets" className="w-full">
                <TabsList>
                    <TabsTrigger value="assets">Assets</TabsTrigger>
                    <TabsTrigger value="steps">Steps</TabsTrigger>
                </TabsList>
                <TabsContent value="assets">
                    <AssetsChart />
                </TabsContent>
                <TabsContent value="steps">
                    <StepsChart />
                </TabsContent>
            </Tabs> 
        </>
    )
}