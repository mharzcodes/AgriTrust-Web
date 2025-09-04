import {type JSX} from "react";

export const VerificationCenterSection = (): JSX.Element => {
    return (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-[#3c3c3c] text-sm lg:text-base font-semibold mb-2">
                Driver Carlos Lopez approved
            </div>
            <div className="text-[#999999] text-xs lg:text-sm font-semibold">
                5 minutes ago
            </div>
        </div>
    );
};

