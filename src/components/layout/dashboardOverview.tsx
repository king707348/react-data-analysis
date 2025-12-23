'use client'

import ChartView from "./chartview"

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardAction } from "../ui/card"

export default function DashboardOverview() {

    return (
        <div className="w-full">
            <div className="card-overview flex flex-wrap m-1">
                <Card className="flex-1 min-w-40 m-1">
                    <CardHeader className="px-2" >
                        <CardTitle>總資產</CardTitle>
                        <CardAction>test</CardAction>
                    </CardHeader>
                    <CardContent className="text-1 sm:text-2 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                        10000000<small>/usd</small>
                    </CardContent>
                </Card>
                <Card className="flex-1 min-w-40 m-1">
                    <CardHeader className="px-2" >
                        <CardTitle>步數</CardTitle>
                        <CardAction>steps</CardAction>
                    </CardHeader>
                    <CardContent className="text-1 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                        12000<small>/steps</small>
                    </CardContent>
                </Card>
                <Card className="flex-1 min-w-40 m-1">
                    <CardHeader className="px-2" >
                        <CardTitle>血壓</CardTitle>
                        <CardAction>steps</CardAction>
                    </CardHeader>
                    <CardContent className="text-1 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                        130/78
                    </CardContent>
                </Card>
                <Card className="flex-1 min-w-40 m-1">
                    <CardHeader className="px-2" >
                        <CardTitle>回診預約</CardTitle>
                        <CardAction>醫院/診所</CardAction>
                    </CardHeader>
                    <CardContent className="text-1 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                        2026/01/07
                    </CardContent>
                </Card>
            </div>

            <div>
                <ChartView />
            </div>
        </div>
    )
}