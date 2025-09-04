import React, {type JSX} from "react";
import { NavigationSideBarSection } from "./NavigationSideBarSection";
import { PageHeader } from "./PageHeader";

interface DashboardProps {
    onPageChange: (page: string) => void;
}

export const Dashboard = ({ onPageChange }: DashboardProps): JSX.Element => {
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
        },
        {
            title: "Total Revenue",
            value: "₱156,789",
            change: "+15% from last month",
            changeType: "positive",
            icon: "💰"
        },
        {
            title: "Products Listed",
            value: "2,156",
            change: "+18% from last month",
            changeType: "positive",
            icon: "📦"
        },
        {
            title: "Delivery Drivers",
            value: "315",
            change: "+5% from last month",
            changeType: "positive",
            icon: "🚗"
        }
    ];

    const transactions = [
        {
            id: "#TXN-001892",
            farmer: "Juan Dela Cruz",
            product: "Rice (25kg)",
            amount: "₱1,250.00",
            status: "Completed",
            statusType: "completed",
            date: "Jun 16, 2025"
        },
        {
            id: "#TXN-001891",
            farmer: "Maria Santos",
            product: "Corn (15kg)",
            amount: "₱780.00",
            status: "Processing",
            statusType: "processing",
            date: "Jun 16, 2025"
        },
        {
            id: "#TXN-001890",
            farmer: "Pedro Garcia",
            product: "Sweet Potato (20kg)",
            amount: "₱950.00",
            status: "Pending",
            statusType: "pending",
            date: "Jun 15, 2025"
        },
        {
            id: "#TXN-001889",
            farmer: "Ana Rodriguez",
            product: "Mung Bean (10kg)",
            amount: "₱650.00",
            status: "Completed",
            statusType: "completed",
            date: "Jun 15, 2025"
        }
    ];

    const getStatusColor = (statusType: string) => {
        switch (statusType) {
            case "completed":
                return "bg-green-500 text-white";
            case "processing":
                return "bg-blue-500 text-white";
            case "pending":
                return "bg-yellow-500 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };

    return (
        <div className="min-h-screen bg-[#f1f1f1]">
            <NavigationSideBarSection onPageChange={onPageChange} currentPage="dashboard" />
            
            <main className="lg:ml-72 xl:ml-80 p-3 sm:p-4 lg:p-6 xl:p-8">
                {/* Header Section */}
                <PageHeader title="Dashboard" />

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

                {/* Recent Blockchain Transactions */}
                <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6">
                    <h2 className="text-[#4f4f4f] text-sm sm:text-base lg:text-lg font-semibold mb-4">
                        Recent Blockchain Transactions
                    </h2>
                    
                    {/* Desktop Table */}
                    <div className="hidden lg:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-[#4f4f4f]">
                                        Transaction ID
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-[#4f4f4f]">
                                        Farmer
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-[#4f4f4f]">
                                        Product
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-[#4f4f4f]">
                                        Amount (₱)
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-[#4f4f4f]">
                                        Status
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-[#4f4f4f]">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-2 text-xs sm:text-sm font-medium text-[#4f4f4f]">
                                            {transaction.id}
                                        </td>
                                        <td className="py-3 px-2 text-xs sm:text-sm text-[#4f4f4f]">
                                            {transaction.farmer}
                                        </td>
                                        <td className="py-3 px-2 text-xs sm:text-sm text-[#4f4f4f]">
                                            {transaction.product}
                                        </td>
                                        <td className="py-3 px-2 text-xs sm:text-sm font-semibold text-[#173a06]">
                                            {transaction.amount}
                                        </td>
                                        <td className="py-3 px-2 text-xs sm:text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(transaction.statusType)}`}>
                                                {transaction.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-2 text-xs sm:text-sm text-[#4f4f4f]">
                                            {transaction.date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="lg:hidden space-y-3">
                        {transactions.map((transaction, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-xs font-medium text-[#4f4f4f]">
                                        {transaction.id}
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(transaction.statusType)}`}>
                                        {transaction.status}
                                    </span>
                                </div>
                                <div className="text-sm font-semibold text-[#173a06] mb-1">
                                    {transaction.farmer}
                                </div>
                                <div className="text-xs text-[#4f4f4f] mb-1">
                                    {transaction.product}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-semibold text-[#173a06]">
                                        {transaction.amount}
                                    </div>
                                    <div className="text-xs text-[#4f4f4f]">
                                        {transaction.date}
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
