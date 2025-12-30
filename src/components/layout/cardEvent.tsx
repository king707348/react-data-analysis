'use client'

import { Card, CardHeader, CardTitle, CardContent, CardAction } from "../ui/card"

export function CardEvent(
    {title, action, unit, getData}: 
    {title: string, action: string, unit: string, getData: number | string}
) {
    return (
        <Card className="flex-1 min-w-40 m-1">
            <CardHeader className="px-2" >
                <CardTitle>{title}</CardTitle>
                <CardAction className="text-[.75rem]">{action}</CardAction>
            </CardHeader>
            <CardContent className="text-1 sm:text-2 md:text-3xl lg:text-4xl px-2 overflow-y-hidden">
                {typeof getData === "number" 
                    ? Number(getData).toLocaleString() 
                    : getData
                }
                {unit && <small>/{unit}</small>}
            </CardContent>
        </Card>
    )
}