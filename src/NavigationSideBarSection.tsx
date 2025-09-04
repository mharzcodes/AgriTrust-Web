import {type JSX, useState} from "react";
import agritrust1 from "./assets/agritrust-1.png";
import homeIcon from "./assets/home_icon.svg";
import dashboardIcon from "./assets/dashboard_icon.svg";
import userIcon from "./assets/user_icon.svg";
import productIcon from "./assets/product_icon.svg";
import vercenterIcon from "./assets/vercenter_icon.svg";
import transacIcon from "./assets/transac_icon.svg";
import auditIcon from "./assets/audit_icon.svg";
import logoutIcon from "./assets/logout_icon.svg";
import arrowIcon from "./assets/arrow.svg";

interface NavigationSideBarSectionProps {
    onPageChange: (page: string) => void;
    currentPage: string;
}

export const NavigationSideBarSection = ({ onPageChange, currentPage }: NavigationSideBarSectionProps): JSX.Element => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const navigationItems = [
        {
            id: "home",
            label: "Home",
            icon: homeIcon,
        },
        {
            id: "dashboard",
            label: "Dashboard",
            icon: dashboardIcon,
        },
        {
            id: "users",
            label: "Users",
            icon: userIcon,
        },
        {
            id: "verification-center",
            label: "Verification Center",
            icon: vercenterIcon,
        },
        {
            id: "transactions",
            label: "Transactions",
            icon: transacIcon,
        },
        {
            id: "products",
            label: "Products",
            icon: productIcon,
        },
        {
            id: "audit-logs",
            label: "Audit Logs",
            icon: auditIcon,
        },
    ];

    const handleItemClick = (itemId: string) => {
        // Only handle navigation for implemented pages
        if (itemId === "home" || itemId === "dashboard" || itemId === "users" || itemId === "transactions" || itemId === "products" || itemId === "audit-logs" || itemId === "verification-center") {
            onPageChange(itemId);
        }
        // Close sidebar on mobile after navigation
        if (window.innerWidth < 1024) {
            setIsSidebarOpen(false);
        }
    };

    const handleLogout = () => {
        // Handle logout functionality
        console.log("Logout clicked");
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label="Toggle navigation menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <nav
                className={`fixed z-50 h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } w-64 lg:w-72 xl:w-80`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <header className="bg-white shadow-sm p-4 lg:p-6">
                        <div className="flex items-center gap-3">
                            <img
                                className="w-12 h-10 object-contain"
                                alt="AgriTrust logo"
                                src={agritrust1}
                            />
                            <h1 className="text-xl lg:text-2xl font-bold text-[#173a06]">
                                AgriTrust
                            </h1>
                        </div>
                    </header>

                    {/* Navigation Items */}
                    <ul className="flex-1 list-none p-0 m-0 space-y-2 p-4">
                        {navigationItems.map((item) => {
                            const isActive = item.id === currentPage;

                            return (
                                <li key={item.id}>
                                    <button
                                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                                            isActive
                                                ? 'bg-gradient-to-r from-[#28620b] to-[#183b06] text-white shadow-md'
                                                : 'text-[#173a06] hover:bg-gray-100'
                                        }`}
                                        onClick={() => handleItemClick(item.id)}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        <div className="w-6 h-6 flex-shrink-0">
                                            <img
                                                className={`w-6 h-6 ${
                                                    isActive 
                                                        ? 'brightness-0 invert' // Makes SVG white
                                                        : 'brightness-0 saturate-100' // Makes SVG #183B06 color
                                                }`}
                                                style={{
                                                    filter: isActive 
                                                        ? 'brightness(0) invert(1)' // White
                                                        : 'brightness(0) saturate(100%) invert(9%) sepia(94%) saturate(7500%) hue-rotate(90deg) brightness(95%) contrast(101%)' // #183B06
                                                }}
                                                alt=""
                                                src={item.icon}
                                            />
                                        </div>
                                        <span className="font-semibold text-sm lg:text-base">
                                            {item.label}
                                        </span>
                                        {isActive && (
                                            <div className="ml-auto">
                                                <img
                                                    className="w-4 h-4 brightness-0 invert"
                                                    style={{ filter: 'brightness(0) invert(1)' }}
                                                    alt=""
                                                    src={arrowIcon}
                                                />
                                            </div>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Logout Button */}
                    <div className="p-4 border-t border-gray-200">
                        <button
                            className="w-full flex items-center gap-4 px-4 py-3 text-[#173a06] hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer"
                            onClick={handleLogout}
                            aria-label="Logout from application"
                        >
                            <img 
                                className="w-6 h-6 brightness-0 saturate-100" 
                                style={{ filter: 'brightness(0) saturate(100%) invert(9%) sepia(94%) saturate(7500%) hue-rotate(90deg) brightness(95%) contrast(101%)' }}
                                alt="" 
                                src={logoutIcon} 
                            />
                            <span className="font-semibold text-sm lg:text-base">
                                Logout
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};
