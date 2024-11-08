import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data : Array<any> = await res.json()
    const toReturn = data.slice(0, 4)
    return NextResponse.json({ data: toReturn })
}