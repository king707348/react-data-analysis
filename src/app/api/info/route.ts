import { NextResponse } from "next/server";

export async function POST() {
    const data = [
        {
            name: "ann",
            age: 16,
            height: 175,
            weight: 90,
            fit_activity: [
                {
                    steps: {
                        date: "",
                        count: 0
                    }
                }
            ],
            month_amount: {
                totalIncome: 50000,
                totalExpense: 15120,
                income: [
                    {
                        id: 1,
                        title: "",
                        amount: 10000,
                        type: "income",
                        category: "salary",
                        date: "",
                        note: ""
                    }
                ],
                expenses: [
                    {
                        id: 1,
                        title: "",
                        amount: 10000,
                        type: "expenses",
                        category: "lunch",
                        date: "",
                        note: ""
                    }
                ]
            }
        }
    ]

    return NextResponse.json(data)
}