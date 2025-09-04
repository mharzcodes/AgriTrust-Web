import React, {type JSX, useState, useEffect} from "react";

interface PageHeaderProps {
    title: string;
}

export const PageHeader = ({ title }: PageHeaderProps): JSX.Element => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Update time every second
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup timer on component unmount
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    return (
        <div className="mb-6 lg:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 lg:mb-6">
                {/* Title on the left */}
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#173a06]">
                    {title}
                </h1>
                
                {/* Time on the right */}
                <div className="bg-[#28620b] rounded-lg px-3 sm:px-4 py-2 self-start shadow-md">
                    <div className="text-white font-semibold text-base sm:text-lg">
                        {formatTime(currentTime)}
                    </div>
                </div>
            </div>
        </div>
    );
};
