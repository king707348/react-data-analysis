export interface StepData {
    count: number
}
export interface BloodPressure {
    systolic: number
    diastolic: number
}
export interface Income {
    title: string
    amount: number
    type: string
    category: string
    note: string
}
export interface Expenses {
    title: string
    amount: number
    type: string
    category: string
    note: string
}
export interface DayEvent {
    date: string
    fit_activity: {
        steps: StepData
        blood_pressure: BloodPressure[]
    }[]
    month_amount: {
        income: Income[]
        expenses: Expenses[]
    }
}
export interface InfoData {
    name: string
    age: number
    height: number
    weight: number
    prevent_assets: number
    totalIncome: number
    totalExpense: number
    reservation: {
        location: string
        note: string
        date: string
        docter: string
    }
    date_event: DayEvent[]
}