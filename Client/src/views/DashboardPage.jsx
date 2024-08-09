import CardDashboar from "../components/CardDashboard";
import ProfileCard from "../components/Profile";
import Sidebar from "../components/Sidebar";

export default function DashboardPage() {

    return (
        <>
            <>
                <div className="bg-[#1C1C1C]">
                    <Sidebar/>
                    <CardDashboar/>
                </div>
            </>

        </>
    )
}