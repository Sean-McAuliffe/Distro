import Link from "next/link";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Logo from "./logo";



const Layout = ({ children }: any) => {
    const linkCSS = "hover:bg-accent hover:text-base rounded-l-xl mt-2"
    const issues = 0;
    return (
        <div className="min-w-screen min-h-screen flex">
            <div className="w-[15%] min-h-screen  bg-base-content  ">
                <div className="w-full p-3 bg-base-content h-12 text-center  justify-center mb-6">

                    <Logo />

                </div>

                <div className="w-full p-3">
                    <ul className="menu text-base-100">
                        <li>
                            <Link href='/' className={linkCSS}>
                                <HomeIcon className="w-5 h-5" />
                                <span>Home</span>
                            </Link>
                            <Link href='/reports' className={linkCSS}>
                                <ChartBarSquareIcon className="w-5 h-5" />
                                <span>Reports</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-[85%] min-h-screen bg-base-300">
                <div className="w-full bg-base-100  navbar shadow">
                    <div className="h-full px-2 text-left w-1/3  navbar-start">


                    </div>
                    <div className="h-full px-2 text-center w-1/3">

                    </div>
                    <div className="h-full p-2 text-right w-1/3 navbar-end gap-2">
                        <Link href='/issues'>

                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    {
                                        issues > 0 ?
                                            <span className="badge badge-xs badge-primary indicator-item"></span>
                                            :
                                            <></>
                                    }
                                </div>
                            </button>

                        </Link>
                        <div className="avatar placeholder">
                            <div className="bg-base-content text-base-100 rounded-full w-8">
                                <span>SM</span>
                            </div>
                        </div>
                        <div className="flex-none dropdown dropdown-bottom dropdown-end">
                            <button className="btn btn-square btn-ghost">
                                <label tabIndex={0} className="m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5  stroke-base-content"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></label>
                            </button>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 border-[1px] border-base-300 rounded-box w-52">
                                <li><Link className="text-base" href='/'>Settings</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
                {children}
            </div>

        </div>
    )
}



export default Layout;