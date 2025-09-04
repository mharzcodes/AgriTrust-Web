import React, {type JSX} from "react";
import { DriverVerificationSection } from "./DriverVerificationSection";
import { FarmerVerificationSection } from "./FarmerVerificationSection";
import { NavigationSideBarSection } from "./NavigationSideBarSection";
import { PageHeader } from "./PageHeader";
import { RecentActivitySection } from "./RecentActivitySection";
import { VerificationCenterSection } from "./VerificationCenterSection";
import { VerificationStatsSection } from "./VerificationStatsSection";

interface VerificationCenterProps {
    onPageChange: (page: string) => void;
}

export const VerificationCenter = ({ onPageChange }: VerificationCenterProps): JSX.Element => {
    const statsData = [
        {
            label: "Pending\nVerifications",
            value: "24",
            icon: "📋",
        },
        {
            label: "Approved\nToday",
            value: "18",
            icon: "✅",
        },
        {
            label: "Under Review",
            value: "7",
            icon: "🔍",
        },
        {
            label: "Rejected\nToday",
            value: "3",
            icon: "❌",
        },
    ];

    return (
        <div className="min-h-screen bg-[#f1f1f1]">
            <NavigationSideBarSection onPageChange={onPageChange} currentPage="verification-center" />
            
            <main className="lg:ml-72 xl:ml-80 p-3 sm:p-4 lg:p-6 xl:p-8">
                {/* Header Section */}
                <PageHeader title="Verification Center" />

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
                        {statsData.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-all duration-200 hover-lift"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-2xl sm:text-3xl">{stat.icon}</span>
                                </div>
                                <div className="text-[#999999] text-xs sm:text-sm font-semibold mb-3 min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
                                    {stat.label.split("\n").map((line, lineIndex) => (
                                        <React.Fragment key={lineIndex}>
                                            {line}
                                            {lineIndex < stat.label.split("\n").length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div className="text-2xl sm:text-3xl font-bold text-black">
                                    {stat.value}
                                </div>
                            </div>
                        ))}
                </div>

                {/* Verification Sections */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
                    <FarmerVerificationSection />
                    <DriverVerificationSection />
                </div>

                {/* Recent Activity Section */}
                <div className="bg-[#f1f1f1] rounded-lg shadow-md p-3 sm:p-4 lg:p-6">
                    <div className="bg-white rounded-lg p-3 sm:p-4 lg:p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-[#4f4f4f] text-sm sm:text-base lg:text-lg font-semibold">
                                Recent Verification Activity
                            </h2>
                            <button className="text-[#747474] text-xs sm:text-sm font-semibold hover:text-[#4f4f4f] transition-colors px-2 py-1 rounded hover:bg-gray-100">
                                View All
                            </button>
                        </div>

                        <div className="border-t border-gray-300 pt-4 space-y-3">
                            <VerificationStatsSection />
                            <VerificationCenterSection />
                            <RecentActivitySection />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
