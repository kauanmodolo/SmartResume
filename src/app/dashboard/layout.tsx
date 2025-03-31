"use client";

import { ReactNode } from "react"
import Image from 'next/image'
import { NavItems } from "../../components/pages/dashboard/nav-items";
import { UserDropdown } from "@/components/pages/dashboard/user-dropdown";
import { ThemeToggle } from "@/components/shared/theme-toggle";

type DashboardLayoutProps = {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps){
    return(
        <div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]">
            <aside className="w-full h-full flex flex-col items center border-r border-muted">
                <div className="w-full p-6 border-b border-muted">
                    <Image 
                        src="/assets/logo.svg"
                        alt="Logo Light"
                        width={100}
                        height={100}
                        className="max-w-[100px] mx-auto block dark:hidden"
                    />
                    <Image 
                        src="/assets/logo-dark.svg"
                        alt="Logo Dark"
                        width={200}
                        height={200}
                        className="max-w-[200px] mx-auto hidden dark:block"
                    />
                </div>
                <NavItems/>

                <div className="w-full mt-auto border-t border-muted px-3 py-4 flex items-center justify-between gap-2">
                    <UserDropdown/>
                    <ThemeToggle/>
                </div>
            </aside>

            <main className="p-6 flex flex-col w-full h-full overflow-auto">
                {children}
            </main>
        </div>
    )
}
