import { NextResponse } from 'next/server';

export async function GET() {
    const mockData = {
        data: "data is done",
        price: 200
    }
    
    return NextResponse.json(mockData)
}