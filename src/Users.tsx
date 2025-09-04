import {type JSX, useState} from "react";
import { NavigationSideBarSection } from "./NavigationSideBarSection";
import { PageHeader } from "./PageHeader";

interface UsersProps {
    onPageChange: (page: string) => void;
}

export const Users = ({ onPageChange }: UsersProps): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState("");

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
            title: "Delivery Drivers",
            value: "315",
            change: "+5% from last month",
            changeType: "positive",
            icon: "🚗"
        },
        {
            title: "Total Customers",
            value: "2,000",
            change: "+8% from last month",
            changeType: "positive",
            icon: "🛒"
        }
    ];

    const users = [
        {
            name: "Juan Dela Cruz",
            email: "juan.delacruz@email.com",
            role: "Farmer",
            verification: "Verified",
            verificationType: "verified",
            joinedDate: "Dec 15, 2024",
            transactions: 147
        },
        {
            name: "Maria Santos",
            email: "maria.santos@email.com",
            role: "Customer",
            verification: "Verified",
            verificationType: "verified",
            joinedDate: "Dec 10, 2024",
            transactions: 89
        },
        {
            name: "Pedro Garcia",
            email: "pedro.garcia@email.com",
            role: "Driver",
            verification: "Pending",
            verificationType: "pending",
            joinedDate: "Dec 8, 2024",
            transactions: 23
        },
        {
            name: "Ana Rodriguez",
            email: "ana.rodriguez@email.com",
            role: "Farmer",
            verification: "Verified",
            verificationType: "verified",
            joinedDate: "Dec 5, 2024",
            transactions: 156
        },
        {
            name: "Carlos Mendoza",
            email: "carlos.mendoza@email.com",
            role: "Customer",
            verification: "Verified",
            verificationType: "verified",
            joinedDate: "Dec 3, 2024",
            transactions: 67
        }
    ];

    const getVerificationColor = (verificationType: string) => {
        switch (verificationType) {
            case "verified":
                return "bg-green-500 text-white";
            case "pending":
                return "bg-yellow-500 text-white";
            case "rejected":
                return "bg-red-500 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#f1f1f1]">
            <NavigationSideBarSection onPageChange={onPageChange} currentPage="users" />
            
            <main className="lg:ml-72 xl:ml-80 p-3 sm:p-4 lg:p-6 xl:p-8">
                {/* Header Section */}
                <PageHeader title="Users" />

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
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

                {/* Search and Filter Section */}
                <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6 mb-6">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search users by name, email"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28620b] focus:border-transparent"
                            />
                        </div>
                        <button className="bg-[#28620b] hover:bg-[#183b06] text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                            Filter by Role
                        </button>
                        <button className="bg-[#28620b] hover:bg-[#183b06] text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                            Sort by Date
                        </button>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Desktop Table */}
                    <div className="hidden lg:block overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-[#28620b]">
                                <tr>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-white">
                                        User
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-white">
                                        Role
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-white">
                                        Verification
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-white">
                                        Joined Date
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-white">
                                        Transactions
                                    </th>
                                    <th className="text-left py-3 px-4 text-sm font-semibold text-white">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4">
                                            <div>
                                                <div className="font-semibold text-[#173a06] text-sm">
                                                    {user.name}
                                                </div>
                                                <div className="text-[#4f4f4f] text-xs">
                                                    {user.email}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-sm text-[#4f4f4f]">
                                            {user.role}
                                        </td>
                                        <td className="py-3 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getVerificationColor(user.verificationType)}`}>
                                                {user.verification}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-sm text-[#4f4f4f]">
                                            {user.joinedDate}
                                        </td>
                                        <td className="py-3 px-4 text-sm font-semibold text-[#173a06]">
                                            {user.transactions}
                                        </td>
                                        <td className="py-3 px-4">
                                            <div className="flex gap-2">
                                                <button className="text-yellow-600 hover:text-yellow-700 cursor-pointer">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                <button className="text-red-600 hover:text-red-700 cursor-pointer">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="lg:hidden">
                        {filteredUsers.map((user, index) => (
                            <div key={index} className="border-b border-gray-100 p-4 last:border-b-0">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="font-semibold text-[#173a06] text-sm">
                                            {user.name}
                                        </div>
                                        <div className="text-[#4f4f4f] text-xs">
                                            {user.email}
                                        </div>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getVerificationColor(user.verificationType)}`}>
                                        {user.verification}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-xs text-[#4f4f4f] mb-3">
                                    <div>
                                        <span className="font-semibold">Role:</span> {user.role}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Joined:</span> {user.joinedDate}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-semibold text-[#173a06]">
                                        {user.transactions} transactions
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="text-yellow-600 hover:text-yellow-700 cursor-pointer">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button className="text-red-600 hover:text-red-700 cursor-pointer">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
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
