import {type JSX} from "react";

export const DriverVerificationSection = (): JSX.Element => {
    const driverData = [
        {
            id: "D-2024-001",
            name: "Carlos Lopez",
            location: "Cebu City",
            status: "Review",
        },
        {
            id: "D-2024-002",
            name: "Isabella Cruz",
            location: "Davao City",
            status: "Pending",
        },
        {
            id: "D-2024-003",
            name: "Miguel Torres",
            location: "Manila",
            status: "Review",
        },
        {
            id: "D-2024-004",
            name: "Sofia Reyes",
            location: "Cebu City",
            status: "Review",
        },
    ];

    return (
        <div className="bg-[#f1f1f1] rounded-lg shadow-md overflow-hidden">
            <div className="bg-white p-4 lg:p-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-[#4f4f4f] text-sm lg:text-base font-semibold">
                        Driver Verification
                    </div>

                    <button className="text-[#747474] text-xs lg:text-sm font-semibold hover:text-[#4f4f4f] cursor-pointer transition-colors">
                        View All
                    </button>
                </div>

                <div className="space-y-3">
                    {driverData.map((driver, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
                        >
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm lg:text-base text-black mb-1">
                                    {driver.name}
                                </div>
                                <p className="text-[#858585] text-xs lg:text-sm">
                                    {driver.location} • ID: {driver.id}
                                </p>
                            </div>

                            <button className="ml-4 px-3 py-1 bg-[#3893cc] rounded text-white text-xs lg:text-sm font-semibold hover:bg-[#2d7bb8] cursor-pointer transition-colors whitespace-nowrap">
                                {driver.status}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
