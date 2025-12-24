'use client'

import Sidebar from "@/components/layout/sidebar"
import DashboardOverview from "@/components/layout/dashboardOverview"

const Layout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <DashboardOverview />
        </div>
    )
}
export default Layout