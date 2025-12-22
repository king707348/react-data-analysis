import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const client_id = process.env.FITBIT_CLIENT_ID
    const redirect = process.env.FITBIT_REDIRECT_URI

    const scope = ` activity cardio_fitness electrocardiogram heartrate irregular_rhythm_notifications location nutrition oxygen_saturation profile respiratory_rate settings sleep social temperature weight`

    const params = new URLSearchParams({
        response_type: "code",
        client_id: client_id!,
        redirect_uri: redirect!,
        scope: scope,
        expires_in: "604800",
    })
    console.log(params.toString())

    const url = `https://www.fitbit.com/oauth2/authorize?${params.toString()}`

    return NextResponse.redirect(url)
}