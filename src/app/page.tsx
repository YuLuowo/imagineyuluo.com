'use client';

import Footer from "@/components/Footer";
import SocialMedia from "@/components/SocialMedia";

export default function HomePage() {
    return (
        <div>
            <div className={"h-screen bg-gray-700 flex flex-col items-center justify-center"}>
                <span className={"text-6xl font-bold text-white mb-6"}>Hi</span>
                <span className={"text-2xl text-white"}>Welcome to my website :D</span>
            </div>
            <div className="h-auto bg-gray-900 flex flex-col md:flex-row items-center p-10 border-b border-zinc-600 mx-auto">
                <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                    <img
                        src="/images/pfp.jpg"
                        alt="Your Profile"
                        className="rounded-full w-32 h-32 md:w-40 md:h-40 border-4 border-gray-700 shadow-lg"
                    />
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-between text-white gap-5">
                    <div className="px-2">
                        <h3 className="text-4xl font-bold mb-4">About Me</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Hi, I'm <span className="text-blue-400 font-semibold">YuLuo</span>.
                        </p>
                    </div>
                    <SocialMedia />
                </div>
            </div>
            <Footer />
        </div>
    );
}
