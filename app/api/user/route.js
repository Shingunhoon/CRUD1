import connectMongoDB from "@/libs/mongodb"
import User from "@/models/topic"
import { NextResponse } from "next/server"

export async function POST(request) {
  const { name, eamil } = await request.json()
  await connectMongoDB()
  await User.create({ name, email })
  return NextResponse.json({ message: "User registred" }, { status: 201 })
}
