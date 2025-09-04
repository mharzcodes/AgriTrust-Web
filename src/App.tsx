import React, { useEffect, useState } from "react";
import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { Users } from "./Users";
import { Transactions } from "./Transactions";
import { Products } from "./Products";
import { AuditLogs } from "./AuditLogs";
import { VerificationCenter } from "./VerificationCenter";
import { LoadingScreen } from "./LoadingScreen";

function App() {
    const [currentPage, setCurrentPage] = useState("home");
    const [isLoading, setIsLoading] = useState(true);
    const [loadingTime, setLoadingTime] = useState(2000);

    useEffect(() => {
        // Simulate dynamic loading time based on network conditions
        const simulateLoadingTime = () => {
            // Random loading time between 1.5s to 4s to simulate real-world conditions
            const minTime = 1500;
            const maxTime = 4000;
            const randomTime = Math.random() * (maxTime - minTime) + minTime;
            setLoadingTime(randomTime);
        };

        simulateLoadingTime();

        // Handle window resize for responsive behavior
        const handleResize = () => {
            // Close sidebar on mobile when screen size changes
            if (window.innerWidth >= 1024) {
                // Desktop - ensure sidebar is visible
                document.body.classList.remove('sidebar-open');
            } else {
                // Mobile - ensure sidebar is closed by default
                document.body.classList.remove('sidebar-open');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once on mount

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update document title based on current page
    useEffect(() => {
        const getPageTitle = (page: string): string => {
            switch (page) {
                case "home":
                    return "AgriTrust - Homepage";
                case "verification-center":
                    return "AgriTrust - Verification Center";
                case "dashboard":
                    return "AgriTrust - Dashboard";
                case "users":
                    return "AgriTrust - Users";
                case "transactions":
                    return "AgriTrust - Transactions";
                case "products":
                    return "AgriTrust - Products";
                case "audit-logs":
                    return "AgriTrust - Audit Logs";
                default:
                    return "AgriTrust - Homepage";
            }
        };

        document.title = getPageTitle(currentPage);
    }, [currentPage]);

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
    };

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    const renderCurrentPage = () => {
        switch (currentPage) {
            case "home":
                return <Home onPageChange={handlePageChange} />;
            case "dashboard":
                return <Dashboard onPageChange={handlePageChange} />;
            case "users":
                return <Users onPageChange={handlePageChange} />;
            case "transactions":
                return <Transactions onPageChange={handlePageChange} />;
            case "products":
                return <Products onPageChange={handlePageChange} />;
            case "audit-logs":
                return <AuditLogs onPageChange={handlePageChange} />;
            case "verification-center":
                return <VerificationCenter onPageChange={handlePageChange} />;
            default:
                return <Home onPageChange={handlePageChange} />;
        }
    };

    if (isLoading) {
        return <LoadingScreen onLoadingComplete={handleLoadingComplete} loadingTime={loadingTime} />;
    }

    return renderCurrentPage();
}

export default App;
