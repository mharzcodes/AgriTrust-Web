import React, {type JSX, useState, useEffect} from "react";

interface LoadingScreenProps {
    onLoadingComplete: () => void;
    loadingTime?: number;
}

export const LoadingScreen = ({ onLoadingComplete, loadingTime = 2000 }: LoadingScreenProps): JSX.Element => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState("Initializing AgriTrust...");

    const loadingSteps = [
        { text: "Initializing AgriTrust...", progress: 20 },
        { text: "Loading user data...", progress: 40 },
        { text: "Connecting to blockchain...", progress: 60 },
        { text: "Verifying system status...", progress: 80 },
        { text: "Finalizing setup...", progress: 100 }
    ];

    useEffect(() => {
        let currentStep = 0;
        const stepInterval = loadingTime / loadingSteps.length;
        
        const progressInterval = setInterval(() => {
            if (currentStep < loadingSteps.length) {
                setLoadingText(loadingSteps[currentStep].text);
                setProgress(loadingSteps[currentStep].progress);
                currentStep++;
            } else {
                clearInterval(progressInterval);
                // Small delay before completing
                setTimeout(() => {
                    onLoadingComplete();
                }, 300);
            }
        }, stepInterval);

        return () => clearInterval(progressInterval);
    }, [loadingTime, onLoadingComplete]);

    return (
        <div className="fixed inset-0 bg-[#f1f1f1] flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-80 max-w-sm mx-4">
                {/* Logo */}
                <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-[#28620b] rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">A</span>
                    </div>
                </div>
                
                {/* Loading Text */}
                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-[#173a06] mb-2">AgriTrust</h2>
                    <p className="text-[#4f4f4f] text-sm">{loadingText}</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className="bg-gradient-to-r from-[#28620b] to-[#183b06] h-2 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Progress Percentage */}
                <div className="text-center">
                    <span className="text-[#28620b] font-semibold text-sm">{progress}%</span>
                </div>

                {/* Loading Spinner */}
                <div className="flex justify-center mt-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#28620b]"></div>
                </div>
            </div>
        </div>
    );
};
