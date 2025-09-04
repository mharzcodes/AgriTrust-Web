import {type JSX} from "react";

export const FarmerVerificationSection = (): JSX.Element => {
    const farmers = [
        {
            id: "F-2024-001",
            name: "Juan Santos",
            location: "Cebu City",
            status: "Review",
        },
        {
            id: "F-2024-002",
            name: "Maria Garcia",
            location: "Davao City",
            status: "Pending",
        },
        {
            id: "F-2024-003",
            name: "Pedro Martinez",
            location: "Manila",
            status: "Review",
        },
        {
            id: "F-2024-004",
            name: "Ana Rodriguez",
            location: "Cebu City",
            status: "Review",
        },
    ];

    return (
        <section
            className="bg-[#f1f1f1] rounded-lg shadow-md overflow-hidden"
            aria-labelledby="farmer-verification-title"
        >
            <div className="bg-white p-4 lg:p-6">
                <header className="flex justify-between items-center mb-4">
                    <h2
                        id="farmer-verification-title"
                        className="text-[#4f4f4f] text-sm lg:text-base font-semibold"
                    >
                        Farmer Verification
                    </h2>

                    <button className="text-[#747474] text-xs lg:text-sm font-semibold hover:text-[#4f4f4f] transition-colors">
                        View All
                    </button>
                </header>

                <div className="space-y-3">
                    {farmers.map((farmer, index) => (
                        <article
                            key={index}
                            className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0"
                        >
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm lg:text-base text-black mb-1">
                                    {farmer.name}
                                </div>
                                <p className="text-[#858585] text-xs lg:text-sm">
                                    {farmer.location} • ID: {farmer.id}
                                </p>
                            </div>

                            <button className="ml-4 px-3 py-1 bg-[#3893cc] rounded text-white text-xs lg:text-sm font-semibold hover:bg-[#2d7bb8] transition-colors whitespace-nowrap">
                                {farmer.status}
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
