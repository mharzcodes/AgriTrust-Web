import {type JSX, useState} from "react";
import { NavigationSideBarSection } from "./NavigationSideBarSection";
import { PageHeader } from "./PageHeader";
import { Modal } from "./Modal";

interface AuditLogsProps {
    onPageChange: (page: string) => void;
}

export const AuditLogs = ({ onPageChange }: AuditLogsProps): JSX.Element => {
    const [filters, setFilters] = useState({
        dateFrom: "2024-01-01",
        dateTo: "2024-12-31",
        actionType: "All Actions",
        userId: "",
        transactionId: "",
        status: "All Status"
    });

    const [selectedLog, setSelectedLog] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const auditLogs = [
        {
            timestamp: "2024-06-17 14:08:32",
            actionType: "Transaction",
            description: "Escrow payment released to farmer after delivery confirmation",
            userId: "TXN789012",
            transactionId: "150kg",
            status: "Completed",
            statusType: "completed"
        },
        {
            timestamp: "2024-06-17 13:45:18",
            actionType: "User",
            description: "New farmer registration completed and verified",
            userId: "USR456789",
            transactionId: "-",
            status: "Completed",
            statusType: "completed"
        },
        {
            timestamp: "2024-06-17 12:30:45",
            actionType: "Product",
            description: "Product listing updated with new pricing information",
            userId: "USR123456",
            transactionId: "PROD789",
            status: "Completed",
            statusType: "completed"
        },
        {
            timestamp: "2024-06-17 11:15:22",
            actionType: "Transaction",
            description: "Payment processing initiated for bulk order",
            userId: "TXN345678",
            transactionId: "200kg",
            status: "In Progress",
            statusType: "in-progress"
        },
        {
            timestamp: "2024-06-17 10:05:33",
            actionType: "System",
            description: "Blockchain synchronization completed successfully",
            userId: "SYS001",
            transactionId: "-",
            status: "Completed",
            statusType: "completed"
        }
    ];

    const getStatusColor = (statusType: string) => {
        switch (statusType) {
            case "completed":
                return "text-green-600";
            case "in-progress":
                return "text-blue-600";
            case "failed":
                return "text-red-600";
            case "pending":
                return "text-yellow-600";
            default:
                return "text-gray-600";
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

    const clearFilters = () => {
        setFilters({
            dateFrom: "2024-01-01",
            dateTo: "2024-12-31",
            actionType: "All Actions",
            userId: "",
            transactionId: "",
            status: "All Status"
        });
    };

    const openModal = (log: any) => {
        setSelectedLog(log);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedLog(null);
    };

    return (
        <div className="min-h-screen bg-[#f1f1f1]">
            <NavigationSideBarSection onPageChange={onPageChange} currentPage="audit-logs" />
            
            <main className="lg:ml-72 xl:ml-80 p-3 sm:p-4 lg:p-6 xl:p-8">
                {/* Header Section */}
                <PageHeader title="Audit Logs" />

                {/* Filter Section */}
                <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 lg:p-6 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
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
                                Action Type
                            </label>
                            <select
                                value={filters.actionType}
                                onChange={(e) => handleFilterChange("actionType", e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28620b] focus:border-transparent text-xs sm:text-sm"
                            >
                                <option value="All Actions">All Actions</option>
                                <option value="Transaction">Transaction</option>
                                <option value="User">User</option>
                                <option value="Product">Product</option>
                                <option value="System">System</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-[#4f4f4f] mb-1">
                                User ID
                            </label>
                            <input
                                type="text"
                                placeholder="Enter User ID"
                                value={filters.userId}
                                onChange={(e) => handleFilterChange("userId", e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28620b] focus:border-transparent text-xs sm:text-sm"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-xs sm:text-sm font-semibold text-[#4f4f4f] mb-1">
                                Transaction ID
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Transaction ID"
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
                                <option value="All Status">All Status</option>
                                <option value="Completed">Completed</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Failed">Failed</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={clearFilters}
                            className="bg-white hover:bg-gray-50 text-[#4f4f4f] font-semibold px-4 py-2 rounded-lg border border-gray-300 transition-colors duration-200 cursor-pointer"
                        >
                            Clear Filters
                        </button>
                        <button
                            onClick={applyFilters}
                            className="bg-[#28620b] hover:bg-[#183b06] text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>

                {/* Audit Logs Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
                        <h2 className="text-[#4f4f4f] text-sm sm:text-base lg:text-lg font-semibold">
                            Audit Logs
                        </h2>
                    </div>
                    
                    {/* Desktop Table */}
                    <div className="hidden lg:block overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Timestamp</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Action Type</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Description</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">User ID</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Transaction ID</th>
                                    <th className="text-left py-3 px-4 table-text font-semibold text-[#4f4f4f]">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {auditLogs.map((log, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 table-text-sm text-[#4f4f4f]">
                                            {log.timestamp}
                                        </td>
                                        <td className="py-3 px-4 table-text-sm text-[#4f4f4f]">
                                            {log.actionType}
                                        </td>
                                        <td className="py-3 px-4 table-text-sm text-[#4f4f4f]">
                                            <button
                                                onClick={() => openModal(log)}
                                                className="text-left hover:text-[#28620b] transition-colors cursor-pointer max-w-xs truncate block"
                                                title="Click to view full description"
                                            >
                                                {log.description}
                                            </button>
                                        </td>
                                        <td className="py-3 px-4 table-text-sm text-[#4f4f4f]">
                                            {log.userId}
                                        </td>
                                        <td className="py-3 px-4 table-text-sm text-[#4f4f4f]">
                                            {log.transactionId}
                                        </td>
                                        <td className="py-3 px-4 table-text-sm">
                                            <span className={`font-semibold ${getStatusColor(log.statusType)}`}>
                                                {log.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Tablet Table (fewer columns) */}
                    <div className="hidden sm:block lg:hidden overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Timestamp</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Action</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Description</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {auditLogs.map((log, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {log.timestamp}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {log.actionType}
                                        </td>
                                        <td className="py-3 px-4 text-xs text-[#4f4f4f]">
                                            {log.description}
                                        </td>
                                        <td className="py-3 px-4 text-xs">
                                            <span className={`font-semibold ${getStatusColor(log.statusType)}`}>
                                                {log.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="sm:hidden">
                        {auditLogs.map((log, index) => (
                            <div key={index} className="border-b border-gray-100 p-4 last:border-b-0">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-xs text-[#4f4f4f]">
                                        {log.timestamp}
                                    </div>
                                    <span className={`text-xs font-semibold ${getStatusColor(log.statusType)}`}>
                                        {log.status}
                                    </span>
                                </div>
                                <div className="text-sm font-semibold text-[#173a06] mb-1">
                                    {log.actionType}
                                </div>
                                <div className="text-xs text-[#4f4f4f] mb-2">
                                    {log.description}
                                </div>
                                <div className="flex justify-between items-center text-xs text-[#4f4f4f]">
                                    <div>User: {log.userId}</div>
                                    <div>ID: {log.transactionId}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal for viewing full log details */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title="Audit Log Details"
                    size="lg"
                >
                    {selectedLog && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-[#4f4f4f] mb-1">
                                        Timestamp
                                    </label>
                                    <p className="text-base text-[#173a06]">{selectedLog.timestamp}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#4f4f4f] mb-1">
                                        Action Type
                                    </label>
                                    <p className="text-base text-[#173a06]">{selectedLog.actionType}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#4f4f4f] mb-1">
                                        User ID
                                    </label>
                                    <p className="text-base text-[#173a06]">{selectedLog.userId}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#4f4f4f] mb-1">
                                        Transaction ID
                                    </label>
                                    <p className="text-base text-[#173a06]">{selectedLog.transactionId}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#4f4f4f] mb-1">
                                        Status
                                    </label>
                                    <p className={`text-base font-semibold ${getStatusColor(selectedLog.statusType)}`}>
                                        {selectedLog.status}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#4f4f4f] mb-2">
                                    Description
                                </label>
                                <p className="text-base text-[#173a06] leading-relaxed">
                                    {selectedLog.description}
                                </p>
                            </div>
                        </div>
                    )}
                </Modal>
            </main>
        </div>
    );
};
