"use client"

import { Disclosure } from "@headlessui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeButton from "./ThemeButton"

export default function Navbar() {

    let pathname = usePathname() || '/'
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex justify-between w-full">
                                <div className="flex items-center">
                                    {/* main left */}
                                    <Link href="/">
                                        <h1 className="text-2xl font-medium">
                                            Alex <span className="text-sky-500">Belli</span>
                                        </h1>
                                    </Link>
                                </div>
                                {/* links right */}
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                    <Link href="/" prefetch className={`${pathname === "/" 
                                    ? 'border-sky-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' 
                                    : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}>
                                        Home
                                    </Link>
                                    <Link href="/guestbook" prefetch className={`${pathname === "/guestbook" 
                                    ? 'border-sky-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' 
                                    : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}>
                                        Guestbook
                                    </Link>
                                    <Link href="/projects" prefetch className={`${pathname === "/projects" 
                                    ? 'border-sky-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                     : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}>
                                        Projects
                                    </Link>
                                    <ThemeButton />
                                </div>
                            </div>

                            {/* burger option */}
                            <div className="-mr-2 flex items-center sm:hidden">
                                
                            <ThemeButton />
                                <Disclosure.Button className="inline-flex items-center p-2 justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 dark:hover:bg-gray-800">
                                    {open ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* burger panel */}
                    <Disclosure.Panel className="sm:hidden">
                                        <div className="pt-2 pb-3 space-y-1">
                                            <Link 
                                            href="/" 
                                            prefetch 
                                            className={`${pathname === "/" 
                                            ? 'bg-sky-50 border-sky-500 text-sky-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800' 
                                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-200 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'}`}>
                                            Home
                                            </Link>
                                            <Link 
                                            href="/guestbook" 
                                            prefetch 
                                            className={`${pathname === "/guestbook" 
                                            ? 'bg-sky-50 border-sky-500 text-sky-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800' 
                                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'}`}>
                                            Guestbook
                                            </Link>
                                            <Link 
                                            href="/projects" 
                                            prefetch 
                                            className={`${pathname === "/projects" 
                                            ? 'bg-sky-50 border-sky-500 text-sky-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800' 
                                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'}`}>
                                            Projects
                                            </Link>
                                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}