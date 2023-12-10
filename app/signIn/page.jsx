import { getServerSession } from "next-auth"
import React from "react"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import SignInBtn from "@/components/SignInBtn"

export default async function SignInpage() {
  const session = await getServerSession(authOptions)
  console.log(session)
  if (session) {
    redirect("/")
  }
  return (
    <div className="mt-16">
      <SignInBtn />
    </div>
  )
}
