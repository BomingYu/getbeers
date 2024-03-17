'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="bg-gray-200 dark:bg-amber-500 p-2">
            <div
                className={`container mx-auto flex justify-between  ${
                    menuOpen ? 'items-cente' : 'items-start'
                }`}>
                <div className="text-black dark:text-gray-800 text-5xl font-black font-mono">
                    <Link href="/">BEERs</Link>
                </div>

                <div className="lg:hidden">
                    {menuOpen ? null : (
                        <button
                            onClick={toggleMenu}
                            className={`text-black dark:text-white m-3 p-2 focus:outline-none text-lg font-bold border-4 border-black dark:border-white rounded-lg ${
                                menuOpen && 'hidden'
                            }`}>
                            Menu
                        </button>
                    )}
                </div>

                <div
                    className={`lg:flex lg:flex-row lg:items-center lg:justify-center ${
                        menuOpen ? 'flex' : 'hidden'
                    }`}>
                    <ul
                        className={`flex gap-1 text-black dark:text-white text-lg ${
                            menuOpen
                                ? 'flex flex-col space-y-3 items-center'
                                : 'flex flex-row items-start space-x-9 list-none justify-center align-middle tracking-wider'
                        }`}>
                        {menuOpen ? (
                            <li className="lg:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="text-black dark:text-white m-3 p-2 focus:outline-none text-lg font-bold border-4 border-black dark:border-white rounded-lg">
                                    Close
                                </button>
                            </li>
                        ) : null}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
