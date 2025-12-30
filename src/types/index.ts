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
        blood_pressure: BloodPressure
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
    prevent_assets: number | 0
    totalIncome: number | 0
    totalExpense: number | 0
    reservation: {
        location: string
        note: string
        date: string
        docter: string
    }
    date_event: DayEvent[]
}

export type RecordDate = {
    id: number;
    status: string;
    event: string;
}

export type CardData = {
    title: string;
    action: string;
    unit: string;
    getData: number | string;
}