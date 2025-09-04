import React, {type JSX} from "react";
import { NavigationSideBarSection } from "./NavigationSideBarSection";
import { PageHeader } from "./PageHeader";

interface HomeProps {
    onPageChange: (page: string) => void;
}

export const Home = ({ onPageChange }: HomeProps): JSX.Element => {
    const summaryData = [
        {
            title: "Total Users",
            value: "2,847",
            change: "+12% from last month",
            changeType: "positive",
            icon: "👥"
        },
        {
            title: "Verified Farmers",
            value: "532",
            change: "+8% from last month",
            changeType: "positive",
            icon: "🌾"
        },
        {
            title: "Ongoing Transactions",
            value: "456",
            change: "-3% from last week",
            changeType: "negative",
            icon: "↔️"
        }
    ];

    const quickActions = [
        "Verify New Users",
        "Add Product Category",
        "Review Transactions",
        "Send Announcement",
        "Generate Reports",
        "Manage Feedbacks"
    ];

    const recentActivities = [
        {
            text: "25 new farmers verified today",
            time: "4 hours ago"
        },
        {
            text: "System maintenance scheduled for tomorrow 2 AM",
            time: "6 hours ago"
        },
        {
            text: "Transaction volume reached new milestone",
            time: "2 days ago"
        },
        {
            text: "Monthly analytics report generated",
            time: "4 days ago"
        }
    ];

    const systemStatus = [
        {
            name: "Blockchain Sync",
            status: "Online",
            statusType: "success"
        },
        {
            name: "Server Uptime",
            status: "99.9%",
            statusType: "success"
        },
        {
            name: "API Response Time",
            status: "125ms",
            statusType: "warning"
        },
        {
            name: "Database Connection",
            status: "Stable",
            statusType: "success"
        },
        {
            name: "Storage Usage",
            status: "78%",
            statusType: "warning"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f1f1f1]">
            <NavigationSideBarSection onPageChange={onPageChange} currentPage="home" />
            
            <main className="lg:ml-72 xl:ml-80 p-3 sm:p-4 lg:p-6 xl:p-8">
                {/* Header Section */}
                <PageHeader title="Home" />

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 lg:mb-8">
                        {summaryData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-all duration-200 hover-lift"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-2xl sm:text-3xl">{item.icon}</span>
                                </div>
                                <div className="text-[#999999] text-xs sm:text-sm font-semibold mb-2">
                                    {item.title}
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold text-[#173a06] mb-2">
                                    {item.value}
                                </div>
                                <div className={`text-xs sm:text-sm font-semibold ${
                                    item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {item.change}
                                </div>
                            </div>
                        ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
                    {/* Quick Actions */}
                    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6">
                        <h2 className="text-[#4f4f4f] text-sm sm:text-base lg:text-lg font-semibold mb-4">
                            Quick Actions
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    className="bg-[#e8f5e8] hover:bg-[#d4edda] text-[#173a06] font-semibold text-xs sm:text-sm py-3 px-4 rounded-lg transition-colors duration-200 text-left cursor-pointer"
                                >
                                    {action}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity and Announcements */}
                    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6">
                        <h2 className="text-[#4f4f4f] text-sm sm:text-base lg:text-lg font-semibold mb-4">
                            Recent Activity and Announcements
                        </h2>
                        <div className="space-y-3">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                                    <div className="text-[#4f4f4f] text-xs sm:text-sm font-medium mb-1">
                                        {activity.text}
                                    </div>
                                    <div className="text-[#999999] text-xs">
                                        {activity.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* System Status */}
                <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6">
                    <h2 className="text-[#4f4f4f] text-sm sm:text-base lg:text-lg font-semibold mb-4">
                        System Status
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {systemStatus.map((status, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${
                                    status.statusType === 'success' ? 'bg-green-500' : 'bg-orange-500'
                                }`}></div>
                                <div className="flex-1">
                                    <div className="text-[#4f4f4f] text-xs sm:text-sm font-medium">
                                        {status.name}
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold ${
                                        status.statusType === 'success' ? 'text-green-600' : 'text-orange-600'
                                    }`}>
                                        {status.status}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};
