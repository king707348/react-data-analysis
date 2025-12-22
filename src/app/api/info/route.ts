import { NextResponse } from "next/server";

export async function POST() {
    const data = [
        {
            name: "ann",
            age: 16,
            height: 175,
            weight: 90,
            totalIncome: 500000,
            totalExpense: 15120,
            reserve: {
                location: "",
                note: "",
                date: "",
                docter: ""
            },
            date_event: [
                {
                    date: "",
                    fit_activity: [
                        {
                            steps: {
                                date: "",
                                count: 0
                            },
                            blood_pressure: {
                                date: "",
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
                                date: "",
                                note: ""
                            }
                        ],
                        expenses: [
                            {
                                title: "",
                                amount: 10000,
                                type: "expenses",
                                category: "lunch",
                                date: "",
                                note: ""
                            }
                        ]
                    }
                },
                {
                    date: "",
                    fit_activity: [
                        {
                            steps: {
                                date: "",
                                count: 0
                            },
                            blood_pressure: {
                                date: "",
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
                                date: "",
                                note: ""
                            }
                        ],
                        expenses: [
                            {
                                title: "",
                                amount: 10000,
                                type: "expenses",
                                category: "lunch",
                                date: "",
                                note: ""
                            }
                        ]
                    }
                },
                {
                    date: "",
                    fit_activity: [
                        {
                            steps: {
                                date: "",
                                count: 0
                            },
                            blood_pressure: {
                                date: "",
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
                                date: "",
                                note: ""
                            }
                        ],
                        expenses: [
                            {
                                title: "",
                                amount: 10000,
                                type: "expenses",
                                category: "lunch",
                                date: "",
                                note: ""
                            }
                        ]
                    }
                },
                {
                    date: "",
                    fit_activity: [
                        {
                            steps: {
                                date: "",
                                count: 0
                            },
                            blood_pressure: {
                                date: "",
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
                                date: "",
                                note: ""
                            }
                        ],
                        expenses: [
                            {
                                title: "",
                                amount: 10000,
                                type: "expenses",
                                category: "lunch",
                                date: "",
                                note: ""
                            }
                        ]
                    }
                },
                {
                    date: "",
                    fit_activity: [
                        {
                            steps: {
                                date: "",
                                count: 0
                            },
                            blood_pressure: {
                                date: "",
                                systolic: 126,
                                diastolic: 75
                            }
                        }
                    ],
                    month_amount: {
                        income: [
                            {
                                title: "salary",
                                amount: 10000,
                                type: "income",
                                category: "salary",
                                date: "",
                                note: ""
                            }
                        ],
                        expenses: [
                            {
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
        }
    ]

    return NextResponse.json(data)
}