import {type JSX, useState} from "react";
import { NavigationSideBarSection } from "./NavigationSideBarSection";
import { PageHeader } from "./PageHeader";


interface TransactionsProps {
    onPageChange: (page: string) => void;
}

export const Transactions = ({ onPageChange }: TransactionsProps): JSX.Element => {
    const [filters, setFilters] = useState({
        transactionId: "",
        status: "All Statuses",
        dateFrom: "",
        dateTo: "",
        productType: "All Products"
    });
    const transactions = [
        {
            id: "#TXN-2024-001523",
            farmer: "Juan Dela Cruz",
            customer: "Maria Santos",
            product: "Organic Rice",
            weight: "25.5",
            amount: "₱1,275.00",
            payment: "GCash",
            paymentType: "gcash",
            driver: "Pedro Garcia",
            vehicle: "Motorcycle ABC-1234",
            status: "COMPLETED",
            statusType: "completed",
            date: "2024-06-17 14:32",
            blockchainHash: "0x3f7a2b9c8d1e...."
        },
        {
            id: "#TXN-2024-001522",
            farmer: "Ana Reyes",
            customer: "Robert Kim",
            product: "Sweet Potato",
            weight: "15.0",
            amount: "₱450.00",
            payment: "PayMaya",
            paymentType: "paymaya",
            driver: "Carlos Mendez",
            vehicle: "Tricycle XYZ-5678",
            status: "IN TRANSIT",
            statusType: "in-transit",
            date: "2024-06-17 13:15",
            blockchainHash: ""
        },
        {
            id: "#TXN-2024-001521",
            farmer: "Luis Fernandez",
            customer: "Sarah Johnson",
            product: "Mung Beans",
            weight: "10.2",
            amount: "₱816.00",
            payment: "GCash",
            paymentType: "gcash",
            driver: "Miguel Torres",
            vehicle: "Motorcycle DEF-9012",
            status: "COMPLETED",
            statusType: "completed",
            date: "2024-06-17 12:48",
            blockchainHash: ""
        },
        {
            id: "#TXN-2024-001520",
            farmer: "Carmen Lopez",
            customer: "David Chen",
            product: "White Onions",
            weight: "8.7",
            amount: "₱348.00",
            payment: "PayMaya",
            paymentType: "paymaya",
            driver: "Jose Alvarez",
            vehicle: "Motorcycle GHI-3456",
            status: "COMPLETED",
            statusType: "completed",
            date: "2024-06-17 11:22",
            blockchainHash: "0x8a4d5e2f9b7c...."
        },
        {
            id: "#TXN-2024-001519",
            farmer: "Ricardo Aquino",
            customer: "Lisa Wong",
            product: "Corn Kernels",
            weight: "50.0",
            amount: "₱1,500.00",
            payment: "GCash",
            paymentType: "gcash",
            driver: "Antonio Silva",
            vehicle: "Pickup Truck JKL-7890",
            status: "PENDING",
            statusType: "pending",
            date: "2024-06-17 10:05",
            blockchainHash: ""
        }
    ];

    const getStatusColor = (statusType: string) => {
        switch (statusType) {
            case "completed":
                return "bg-green-100 text-green-800";
            case "in-transit":
                return "bg-blue-100 text-blue-800";
            case "pending":
                return "bg-yellow-100 text-yellow-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const getPaymentIcon = (paymentType: string) => {
        switch (paymentType) {
            case "gcash":
                return "🔵";
            case "paymaya":
                return "🟢";
            default:
                return "⚪";
        }
    };

    const handleFilterChange = (field: string, value: string) => {
        setFilters(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const applyFilters = () => {
        // Filter logic would be implemented here
        console.log("Applying filters:", filters);
    };
    return (
        <div className="min-h-screen bg-[#f1f1f1]">
            <NavigationSideBarSection onPageChange={onPageChange} currentPage="transactions" />
            
            <main className="lg:ml-72 xl:ml-80 p-3 sm:p-4 lg:p-6 xl:p-8">
                {/* Header Section */}
                <PageHeader title="Transactions" />

                {/* Filter Section */}
                <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 mb-4">
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-[#4f4f4f] mb-1">
                                Transaction ID
                            </label>
                            <input
                                type="text"
                                placeholder="Enter transaction ID"
                                value={filters.transactionId}
                                onChange={(e) => handleFilterChange("transactionId", e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28620b] focus:border-transparent text-xs sm:text-sm"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-[#4f4f4f] mb-1">
                                Status
                            </label>
                            <select
                                value={filters.status}
                                onChange={(e) => handleFilterChange("status", e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28620b] focus:border-transparent text-xs sm:text-sm"
                            >
                                <option value="All Statuses">All Statuses</option>
                                <option value="COMPLETED">Completed</option>
                                <option value="IN TRANSIT">In Transit</option>
                                <option value="PENDING">Pending</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-[#4f4f4f] mb-1">
                                Date From
                            </label>
                            <input
                                type="date"
                                value={filters.dateFrom}
                                onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28620b] focus:border-transparent text-xs sm:text-sm"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-[#4f4f4f] mb-1">
                                Date To
                            </label>
                            <input
                                type="date"
                                value={filters.dateTo}
                                onChange={(e) => handleFilterChange("dateTo", e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28620b] focus:border-transparent text-xs sm:text-sm"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-[#4f4f4f] mb-1">
                                Product Type
                            </label>
                            <select
                                value={filters.productType}
                                onChange={(e) => handleFilterChange("productType", e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28620b] focus:border-transparent text-xs sm:text-sm"
                            >
                                <option value="All Products">All Products</option>
                                <option value="Organic Rice">Organic Rice</option>
                                <option value="Sweet Potato">Sweet Potato</option>
                                <option value="Mung Beans">Mung Beans</option>
                                <option value="White Onions">White Onions</option>
                                <option value="Corn Kernels">Corn Kernels</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="flex justify-end">
                        <button
                            onClick={applyFilters}
                            className="bg-[#28620b] hover:bg-[#183b06] text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>

                {/* Transaction Records Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
                        <h2 className="text-[#4f4f4f] text-sm sm:text-base lg:text-lg font-semibold">
                            Transaction Records
                        </h2>
                    </div>
                    
                    {/* Desktop Table */}
                    <div className="hidden xl:block overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Transaction ID</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Farmer</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Customer</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Product</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Weight (kg)</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Amount (P)</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Payment</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Driver</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Vehicle</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Status</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Date</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Blockchain Hash</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 text-xs font-medium text-[#4f4f4f]">
                                            {transaction.id}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {transaction.farmer}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {transaction.customer}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {transaction.product}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {transaction.weight}
                                        </td>
                                        <td className="py-3 px-4 text-xs font-semibold text-[#173a06]">
                                            {transaction.amount}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            <div className="flex items-center gap-1">
                                                <span>{getPaymentIcon(transaction.paymentType)}</span>
                                                {transaction.payment}
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {transaction.driver}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {transaction.vehicle}
                                        </td>
                                        <td className="py-3 px-4 text-xs">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(transaction.statusType)}`}>
                                                {transaction.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {transaction.date}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f] font-mono">
                                            {transaction.blockchainHash || "-"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Tablet Table (fewer columns) */}
                    <div className="hidden lg:block xl:hidden overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Transaction ID</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Farmer</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Product</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Amount</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Status</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 text-xs font-medium text-[#4f4f4f]">
                                            {transaction.id}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {transaction.farmer}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {transaction.product}
                                        </td>
                                        <td className="py-3 px-4 text-xs font-semibold text-[#173a06]">
                                            {transaction.amount}
                                        </td>
                                        <td className="py-3 px-4 text-xs">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(transaction.statusType)}`}>
                                                {transaction.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {transaction.date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="lg:hidden">
                        {transactions.map((transaction, index) => (
                            <div key={index} className="border-b border-gray-100 p-4 last:border-b-0">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-xs font-medium text-[#4f4f4f]">
                                        {transaction.id}
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(transaction.statusType)}`}>
                                        {transaction.status}
                                    </span>
                                </div>
                                <div className="text-sm font-semibold text-[#173a06] mb-1">
                                    {transaction.farmer} → {transaction.customer}
                                </div>
                                <div className="text-xs text-[#4f4f4f] mb-1">
                                    {transaction.product} ({transaction.weight}kg)
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-sm font-semibold text-[#173a06]">
                                        {transaction.amount}
                                    </div>
                                    <div className="text-xs text-[#4f4f4f]">
                                        {transaction.date}
                                    </div>
                                </div>
                                <div className="text-xs text-[#4f4f4f]">
                                    <div className="flex items-center gap-1 mb-1">
                                        <span>{getPaymentIcon(transaction.paymentType)}</span>
                                        {transaction.payment}
                                    </div>
                                    <div>Driver: {transaction.driver}</div>
                                    <div>Vehicle: {transaction.vehicle}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Table Footer */}
                    <div className="p-3 sm:p-4 lg:p-6 border-t border-gray-200 bg-gray-50">
                        <div className="text-xs sm:text-sm text-[#4f4f4f]">
                            Showing 1-5 of 2,847 transactions
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
