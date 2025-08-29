'use client';

import Footer from "@/components/layout/Footer";
import SocialMedia from "@/components/ui/SocialMedia";
import NeonBackground from "@/components/layout/NeonBackground";
import { motion } from "framer-motion";
import SkillGroup from "@/components/ui/SkillGroup";
import React from "react";
import CommentSection from "@/components/ui/CommentSection";

export default function HomePage() {
    return (
        <main>
            <NeonBackground>
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="flex flex-col gap-20 md:flex-row items-center justify-center min-h-screen"
                >
                    <div className="order-1 md:order-2 flex justify-center mx-16 md:mb-0">
                        <img
                            src="/images/pfp.png"
                            alt="hi"
                            className="rounded-full w-48 h-48 border-4 border-gray-700 shadow-lg"
                        />
                    </div>

                    <div className="order-2 md:order-1 mx-16">
                        <h1 className="text-6xl font-bold mb-6">YuLuo</h1>
                        <p className="text-xl md:text-2xl">Welcome to my website :D</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative my-12 w-5/6 md:w-full max-w-7xl"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-xl blur-lg opacity-70 -z-10" />
                    <div className="flex flex-col rounded-xl p-6 bg-black backdrop-blur-sm">
                        <h2 className="text-4xl font-semibold mb-4">About Me</h2>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <div className="flex flex-col gap-6 text-lg">
                                <div>
                                    Hello I&#39;m <span className="text-blue-400 font-semibold">YuLuo</span>, a student who is passionate about web development and programming.
                                    I love building responsive and interactive websites, and enjoy working with modern web technologies like React, Next.js, and Tailwind CSS.
                                    I&#39;m currently learning more about full-stack development and how to design user experiences.
                                </div>
                                <div className="mb-6">
                                    <span>Also, I&#39;ve built some stuff, like:</span>
                                    <ul className="list-disc list-inside space-y-2 mt-2 text-blue-300 text-base">
                                        <li>
                                            <a href="https://github.com/YuLuowo/Azurlane" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                AzurLane TW Wiki (Released Soon)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://api.imagineyuluo.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                AzurLane Game API
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/YuLuowo/cdn" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                AzurLane Picture Resource
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                    <span>And u can follow me here</span>
                                    <SocialMedia />
                                </div>
                            </div>
                            <img
                                src="/images/yibei.png"
                                alt="Your Profile"
                                className="max-h-96 mx-auto md:mx-0"
                            />
                        </div>
                    </div>
                </motion.div>
                <SkillGroup />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative my-12 w-5/6 md:w-full max-w-7xl"
                >
                    <h2 className="text-4xl font-semibold mb-6">Comments</h2>
                    <span className="text-gray-400 text-lg">Want to tell me something? Leave your comment here!</span>
                    <CommentSection />

                </motion.div>

            </NeonBackground>
            <Footer />
        </main>
    );
}
