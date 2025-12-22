'use client'

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardAction } from "../ui/card"

export default function DashboardOverview() {

    return (
        <div>
            <div className="card-overview flex m-1">
                <Card className="min-w-40 m-1">
                    <CardHeader >
                        <CardTitle>總資產</CardTitle>
                        <CardAction>test</CardAction>
                    </CardHeader>
                    <CardContent className="text-4xl">
                        10000000<small>/usd</small>
                    </CardContent>
                </Card>
                <Card className="min-w-40 m-1">
                    <CardHeader >
                        <CardTitle>步數</CardTitle>
                        <CardAction>steps</CardAction>
                    </CardHeader>
                    <CardContent className="text-4xl">
                        12000<small>/steps</small>
                    </CardContent>
                </Card>
                <Card className="min-w-40 m-1">
                    <CardHeader >
                        <CardTitle>血壓</CardTitle>
                        <CardAction>steps</CardAction>
                    </CardHeader>
                    <CardContent className="text-4xl">
                        130/78
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}