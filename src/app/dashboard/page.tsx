'use client'

import Sidebar from "@/components/layout/sidebar"
import DashboardOverview from "@/components/layout/dashboardOverview"

export default function Layout(){

    return (
        <div className="flex">
            <Sidebar />
            <DashboardOverview />
        </div>
    )
}