import { LanguageMode } from "@/components/layout/languageMode"
import { ColorMode } from "@/components/layout/themeMode"

import Link from "next/link";
import { Button } from "@/components/ui/button"
import { useTranslations, useMessages } from "next-intl"

interface Route {
    id: string;
    href: string;
    icon: string;
}

export default function Sidebar() {
    const tt = useTranslations("")
    const t = useTranslations("Route")
    const messages = useMessages()
    console.log("Sidebar messages:", messages);
    const keys = Object.keys(messages.Route)

    const Route: Route[] = [
        {
            id: "Dashboard",
            href: "/dashboard",
            icon: "dashboard"
        },
        {
            id: "Activity",
            href: "/",
            icon: "Activity"
        },
        {
            id: "Account",
            href: "/dashboard/account",
            icon: "account"
        },
        {
            id: "Settings",
            href: "/dashboard/settings",
            icon: "settings"
        }
    ]

    const itemRoute = keys.map((key: string, index: number) => (
        <li key={index} className="flex hover:bg-gray-100 hover:text-gray-900">   
            <Link href={Route.find(r => r.id === key)?.href || "#"} className="w-full pl-1 py-2">{t(key)}</Link>
        </li>
    ))

    return (
        <aside className="flex flex-col min-w-[12rem] w-[20%] h-[auto] p-2 bg-blue-500">
            <div className="pb-3 border-b-1">{tt("title")} </div>
            <ul className="border-b-1">
                {itemRoute}
            </ul>
            <div className="flex flex-col my-4">
                <div className="flex justify-between gap-4">
                    <LanguageMode />
                    <ColorMode />
                </div>
                <Button className="my-2 w-fit" >{t("logout")}</Button>
            </div>
        </aside>
    )
}