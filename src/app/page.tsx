'use client';

import Footer from "@/components/Footer";
import SocialMedia from "@/components/SocialMedia";
import NeonBackground from "@/components/NeonBackground";
import Card from "@/components/Card";
import { motion } from "framer-motion";

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
                        <p className="text-2xl">Welcome to my website :D</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col w-5/6 md:w-full max-w-7xl border border-gray-800 rounded-lg my-12 p-6 bg-black/10 backdrop-blur-sm"
                >
                    <h2 className="text-4xl font-semibold mb-4">About Me</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <div className="flex flex-col gap-6 text-lg">
                            <div>
                                Hello I'm <span className="text-blue-400 font-semibold">YuLuo</span>, a student who is passionate about web development and programming.
                                I love building responsive and interactive websites, and enjoy working with modern web technologies like React, Next.js, and Tailwind CSS.
                                I'm currently learning more about full-stack development and how to design user experiences.
                            </div>
                            <div className="mb-6">
                                <span>Also, I've built some stuff, like:</span>
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
                            className="max-h-96"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col w-5/6 md:w-full max-w-7xl my-12"
                >
                    <h2 className="text-4xl font-semibold mb-6">Skill</h2>
                    <div className="flex flex-col my-3 gap-6">
                        <h4 className="text-2xl font-semibold">Languages</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            <Card imageSrc="https://www.svgrepo.com/show/452184/csharp.svg" title="CSharp" />
                            <Card imageSrc="https://www.svgrepo.com/show/349330/css3.svg" title="CSS" />
                            <Card imageSrc="https://www.svgrepo.com/show/452228/html-5.svg" title="HTML" />
                            <Card imageSrc="https://www.svgrepo.com/show/452234/java.svg" title="Java" />
                            <Card imageSrc="https://www.svgrepo.com/show/349419/javascript.svg" title="JavaScript" />
                            <Card imageSrc="https://www.svgrepo.com/show/353980/kotlin.svg" title="Kotlin" />
                            <Card imageSrc="https://www.svgrepo.com/show/452091/python.svg" title="Python" />
                            <Card imageSrc="https://www.svgrepo.com/show/373966/php.svg" title="PHP" />
                            <Card imageSrc="https://www.svgrepo.com/show/349540/typescript.svg" title="TypeScript" />
                        </div>
                    </div>

                    <div className="flex flex-col my-3 gap-6">
                        <h4 className="text-2xl font-semibold">Frameworks</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            <Card imageSrc="https://www.svgrepo.com/show/373442/asp.svg" title="ASP.NET" />
                            <Card imageSrc="https://www.svgrepo.com/show/353498/bootstrap.svg" title="Bootstrap" />
                            <Card imageSrc="https://www.svgrepo.com/show/376332/laravel.svg" title="Laravel" />
                            <Card imageSrc="https://www.svgrepo.com/show/306466/next-dot-js.svg" title="Next.js" className="bg-white rounded-full" />
                            <Card imageSrc="https://www.svgrepo.com/show/452075/node-js.svg" title="Node.js" />
                            <Card imageSrc="https://www.svgrepo.com/show/452092/react.svg" title="React" />
                            <Card imageSrc="https://www.svgrepo.com/show/374118/tailwind.svg" title="TailwindCSS" />
                            <Card imageSrc="https://www.svgrepo.com/show/452130/vue.svg" title="Vue.js" />
                        </div>
                    </div>
                </motion.div>
            </NeonBackground>
            <Footer />
        </main>
    );
}
