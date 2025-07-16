import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import LandingPage from "./components/LandingPage"

export default async function HomePage() {
  const user = await currentUser

  
  //if user is not logged in, render the public page
    if (!user) return <LandingPage />


  //if the user is logged in, redirect to the events page
  return redirect ('/events')
}
