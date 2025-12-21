import { NextResponse } from 'next/server';

export async function GET() {
    const mockData = [
        {
            date: "data is done",
            price: 200
        }
    ]
    
    return NextResponse.json(mockData)
}