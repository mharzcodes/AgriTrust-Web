import {type JSX} from "react";
import { NavigationSideBarSection } from "./NavigationSideBarSection";
import { PageHeader } from "./PageHeader";

interface ProductsProps {
    onPageChange: (page: string) => void;
}

export const Products = ({ onPageChange }: ProductsProps): JSX.Element => {
    const summaryData = [
        {
            title: "Total Products",
            value: "5,000",
            change: "+18% from last month",
            changeType: "positive",
            icon: "📦"
        },
        {
            title: "Active Listings",
            value: "2,156",
            change: "+18% from last month",
            changeType: "positive",
            icon: "📦"
        }
    ];

    const products = [
        {
            name: "Organic Cabbage",
            category: "Vegetables",
            farmer: "Juan Dela Cruz",
            farmerEmail: "juan.delacruz@email.com",
            pricePerKg: "45.00",
            availableStock: "150kg",
            status: "Active",
            statusType: "active"
        },
        {
            name: "Organic Cabbage",
            category: "Vegetables",
            farmer: "Maria Santos",
            farmerEmail: "maria.santos@email.com",
            pricePerKg: "42.00",
            availableStock: "200kg",
            status: "Active",
            statusType: "active"
        },
        {
            name: "Organic Cabbage",
            category: "Vegetables",
            farmer: "Pedro Garcia",
            farmerEmail: "pedro.garcia@email.com",
            pricePerKg: "48.00",
            availableStock: "120kg",
            status: "Active",
            statusType: "active"
        },
        {
            name: "Organic Cabbage",
            category: "Vegetables",
            farmer: "Ana Rodriguez",
            farmerEmail: "ana.rodriguez@email.com",
            pricePerKg: "46.00",
            availableStock: "180kg",
            status: "Active",
            statusType: "active"
        },
        {
            name: "Organic Cabbage",
            category: "Vegetables",
            farmer: "Carlos Mendoza",
            farmerEmail: "carlos.mendoza@email.com",
            pricePerKg: "44.00",
            availableStock: "100kg",
            status: "Active",
            statusType: "active"
        }
    ];

    const getStatusColor = (statusType: string) => {
        switch (statusType) {
            case "active":
                return "text-green-600";
            case "inactive":
                return "text-red-600";
            case "pending":
                return "text-yellow-600";
            default:
                return "text-gray-600";
        }
    };

    return (
        <div className="min-h-screen bg-[#f1f1f1]">
            <NavigationSideBarSection onPageChange={onPageChange} currentPage="products" />
            
            <main className="lg:ml-72 xl:ml-80 p-3 sm:p-4 lg:p-6 xl:p-8">
                {/* Header Section */}
                <PageHeader title="Products" />

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 lg:mb-8">
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

                {/* Product Listings Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
                        <h2 className="text-[#4f4f4f] text-sm sm:text-base lg:text-lg font-semibold">
                            Product Listings
                        </h2>
                    </div>
                    
                    {/* Desktop Table */}
                    <div className="hidden lg:block overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Product</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Category</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Farmer</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Price per kg</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Available Stock</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4 text-sm font-semibold text-[#173a06]">
                                            {product.name}
                                        </td>
                                        <td className="py-3 px-4 text-sm text-[#4f4f4f]">
                                            {product.category}
                                        </td>
                                        <td className="py-3 px-4">
                                            <div>
                                                <div className="text-sm font-semibold text-[#173a06]">
                                                    {product.farmer}
                                                </div>
                                                <div className="text-xs text-[#4f4f4f]">
                                                    {product.farmerEmail}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-sm font-semibold text-[#173a06]">
                                            ₱{product.pricePerKg}
                                        </td>
                                        <td className="py-3 px-4 text-sm text-[#4f4f4f]">
                                            {product.availableStock}
                                        </td>
                                        <td className="py-3 px-4 text-sm">
                                            <span className={`font-semibold ${getStatusColor(product.statusType)}`}>
                                                {product.status}
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
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Product</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Farmer</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Price</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Stock</th>
                                    <th className="text-left py-3 px-4 text-xs font-semibold text-[#4f4f4f]">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4">
                                            <div>
                                                <div className="text-sm font-semibold text-[#173a06]">
                                                    {product.name}
                                                </div>
                                                <div className="text-xs text-[#4f4f4f]">
                                                    {product.category}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">
                                            <div>
                                                <div className="text-sm font-semibold text-[#173a06]">
                                                    {product.farmer}
                                                </div>
                                                <div className="text-xs text-[#4f4f4f]">
                                                    {product.farmerEmail}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-sm font-semibold text-[#173a06]">
                                            ₱{product.pricePerKg}
                                        </td>
                                        <td className="py-3 px-4 text-sm text-[#4f4f4f]">
                                            {product.availableStock}
                                        </td>
                                        <td className="py-3 px-4 text-sm">
                                            <span className={`font-semibold ${getStatusColor(product.statusType)}`}>
                                                {product.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="sm:hidden">
                        {products.map((product, index) => (
                            <div key={index} className="border-b border-gray-100 p-4 last:border-b-0">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-sm font-semibold text-[#173a06]">
                                        {product.name}
                                    </div>
                                    <span className={`text-sm font-semibold ${getStatusColor(product.statusType)}`}>
                                        {product.status}
                                    </span>
                                </div>
                                <div className="text-xs text-[#4f4f4f] mb-2">
                                    {product.category}
                                </div>
                                <div className="text-sm font-semibold text-[#173a06] mb-1">
                                    {product.farmer}
                                </div>
                                <div className="text-xs text-[#4f4f4f] mb-2">
                                    {product.farmerEmail}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-sm font-semibold text-[#173a06]">
                                            ₱{product.pricePerKg}/kg
                                        </div>
                                    </div>
                                    <div className="text-sm text-[#4f4f4f]">
                                        {product.availableStock}
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
