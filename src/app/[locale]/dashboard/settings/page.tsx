import Sidebar from "@/components/layout/sidebar";

export default function SettingPage(){
    return (
        <div className="flex">
            <Sidebar />
            <div className="p-4">
                settings page
            </div>
        </div>
    )
}