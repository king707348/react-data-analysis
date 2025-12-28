
import { ColorMode } from "@/components/layout/themeMode"

import Link from "next/link";
import { Button } from "@/components/ui/button"

interface Route {
    label: string;
    href: string;
    icon: string;
}


const Route: Route[] = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: "dashboard"
    },
    {
        label: "Activity",
        href: "/",
        icon: "Activity"
    },
    {
        label: "Account",
        href: "/dashboard/account",
        icon: "account"
    },
    {
        label: "Settings",
        href: "/dashboard/settings",
        icon: "settings"
    }
]

export default function Sidebar() {


    return (
        <aside className="flex flex-col w-[20%] h-[100vh] p-2 bg-blue-500">
            <div className="pb-4 border-b-1">PERSONAL DASHBOARD</div>
            <ul className="pb-4 border-b-1">
                {Route.map((data, index) => (
                    <li key={index} className="pl-1 py-2 hover:bg-gray-100 hover:text-gray-900">
                        <Link href={data.href}>{data.label}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col my-4">
                <ColorMode />
                <Button className="my-2 w-fit" >Logout</Button>
            </div>
        </aside>
    )
}