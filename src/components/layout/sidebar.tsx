import Link from "next/link";


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
        <div className="flex flex-col ">
            {Route.map((data, index) => (
                <li key={index}>
                    <Link href={data.href}>{data.label}</Link>
                </li>
            ))}
        </div>
    )
}