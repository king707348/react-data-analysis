import { NextResponse } from "next/server";

export async function GET() {
    const data = [
        {
            name: "Evan",
            age: 16,
            height: 175,
            weight: 90,
            prevent_assets: 1000000,
            totalIncome: 0,
            totalExpense: 15120,
            reservation: {
                location: "",
                note: "",
                date: "",
                docter: ""
            },
            date_event: [
                {
                    date: "2025-09-05",
                    fit_activity: [
                        {
                            steps: {
                                count: 12800
                            },
                            blood_pressure: {
                                systolic: 126,
                                diastolic: 75
                            }
                        }
                    ],
                    month_amount: {
                        income: [
                            {
                                title: "salary",
                                amount: 30000,
                                type: "income",
                                category: "salary",
                                note: ""
                            }
                        ],
                        expenses: [
                            {
                                title: "",
                                amount: 17000,
                                type: "expenses",
                                category: "lunch",
                                note: ""
                            }
                        ]
                    }
                },
                {
                    date: "2025-10-05",
                    fit_activity: [
                        {
                            steps: {
                                count: 17548
                            },
                            blood_pressure: {
                                systolic: 126,
                                diastolic: 75
                            }
                        }
                    ],
                    month_amount: {
                        income: [
                            {
                                title: "salary",
                                amount: 25000,
                                type: "income",
                                category: "salary",
                                note: ""
                            }
                        ],
                        expenses: [
                            {
                                title: "",
                                amount: 33500,
                                type: "expenses",
                                category: "lunch",
                                note: ""
                            }
                        ]
                    }
                },
                {
                    date: "2025-11-05",
                    fit_activity: [
                        {
                            steps: {
                                count: 19876
                            },
                            blood_pressure: {
                                systolic: 126,
                                diastolic: 75
                            }
                        }
                    ],
                    month_amount: {
                        income: [
                            {
                                title: "salary",
                                amount: 47500,
                                type: "income",
                                category: "salary",
                                note: ""
                            }
                        ],
                        expenses: [
                            {
                                title: "",
                                amount: 12500,
                                type: "expenses",
                                category: "lunch",
                                note: ""
                            }
                        ]
                    }
                },
                {
                    date: "2025-12-05",
                    fit_activity: [
                        {
                            steps: {
                                count: 24356
                            },
                            blood_pressure: {
                                systolic: 126,
                                diastolic: 75
                            }
                        }
                    ],
                    month_amount: {
                        income: [
                            {
                                title: "salary",
                                amount: 50000,
                                type: "income",
                                category: "salary",
                                note: ""
                            }
                        ],
                        expenses: [
                            {
                                title: "",
                                amount: 21000,
                                type: "expenses",
                                category: "lunch",
                                note: ""
                            }
                        ]
                    }
                },
                {
                    date: "2026-01-05",
                    fit_activity: [
                        {
                            steps: {
                                count: 16345
                            },
                            blood_pressure: {
                                systolic: 126,
                                diastolic: 75
                            }
                        }
                    ],
                    month_amount: {
                        income: [
                            {
                                title: "salary",
                                amount: 18000,
                                type: "income",
                                category: "salary",
                                note: ""
                            }
                        ],
                        expenses: [
                            {
                                title: "",
                                amount: 44000,
                                type: "expenses",
                                category: "lunch",
                                note: ""
                            }
                        ]
                    }
                }
            ]
        }
    ]

    return NextResponse.json(data)
}