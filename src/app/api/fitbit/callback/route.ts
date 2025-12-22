import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get("code")

    const clientId = process.env.FITBIT_CLIENT_ID!
    const clientSecret = process.env.FITBIT_CLIENT_SECRET!
    const redirectUri = process.env.FITBIT_REDIRECT_URI!

    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

    try {
    // 1. 向 Fitbit 交換 Token
    const response = await fetch("https://api.fitbit.com/oauth2/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        clientId: clientId,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
        code: code!,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Token Exchange Error:", data);
      return NextResponse.json(data, { status: 400 });
    }

    // 2. 將 Token 存入 Cookie (HttpOnly 比較安全)
    const cookieStore = await cookies(); 
    
    cookieStore.set("fitbit_access_token", data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: data.expires_in, // 跟隨 Fitbit 的過期時間
      path: "/",
    });
    
    // 如果有 refresh token 也要存，以便之後自動更新 token
    cookieStore.set("fitbit_refresh_token", data.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 2592000, // 30天
      path: "/",
    });

    // 3. 登入成功，導回首頁
    return NextResponse.redirect(new URL("/dashboard", request.url));

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}