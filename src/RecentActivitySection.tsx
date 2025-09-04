import {type JSX} from "react";

export const RecentActivitySection = (): JSX.Element => {
    const activityData = [
        {
            id: 1,
            message: "Farmer Maria Garcia approved",
            timestamp: "10 minutes ago",
        },
        {
            id: 2,
            message: "Driver Isabella Cruz pending review",
            timestamp: "15 minutes ago",
        },
        {
            id: 3,
            message: "Farmer Pedro Martinez rejected",
            timestamp: "20 minutes ago",
        },
    ];

    return (
        <div className="space-y-3">
            {activityData.map((activity) => (
                <div
                    key={activity.id}
                    className="p-3 bg-gray-50 rounded-lg"
                >
                    <div className="text-[#3c3c3c] text-sm lg:text-base font-semibold mb-1">
                        {activity.message}
                    </div>
                    <div className="text-[#999999] text-xs lg:text-sm font-semibold">
                        {activity.timestamp}
                    </div>
                </div>
            ))}
        </div>
    );
};
