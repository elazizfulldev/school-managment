import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <header className="px-6 py-4 shadow-md bg-white">
                <nav className="flex justify-between items-center container mx-auto ">
                    <div className="text-2xl font-bold text-primary">
                        School
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link to="/">
                            <Button variant="ghost">Home</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="ghost">Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button>Sign Up</Button>
                        </Link>
                    </div>
                </nav>

            </header>

            <main>
                <Outlet />

            </main>

            <footer>
                footer
            </footer>
        </>
    )
}
