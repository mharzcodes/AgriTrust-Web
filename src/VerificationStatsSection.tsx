import {type JSX} from "react";

export const VerificationStatsSection = (): JSX.Element => {
    return (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-[#3c3c3c] text-sm lg:text-base font-semibold mb-2">
                Farmer Juan Santos approved
            </div>
            <div className="text-[#999999] text-xs lg:text-sm font-semibold">
                2 minutes ago
            </div>
        </div>
    );
};
