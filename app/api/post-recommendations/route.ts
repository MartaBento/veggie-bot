import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function POST(request: Request): Promise<NextResponse> {
  const apiUrl = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY ?? "";

  const requestBody = JSON.parse(await request.text());

  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = response.data;
    return NextResponse.json(data);
  } catch (error: AxiosError<any> | any) {
    const errorMessage = error.response?.data.message || error.message;
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
