import React from "react";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

const SkillGroup = () => {
    return (
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
                    <Card imageSrc="/icon/csharp.svg" title="CSharp" />
                    <Card imageSrc="/icon/css3.svg" title="CSS" />
                    <Card imageSrc="/icon/html-5.svg" title="HTML" />
                    <Card imageSrc="/icon/java.svg" title="Java" />
                    <Card imageSrc="/icon/javascript.svg" title="JavaScript" />
                    <Card imageSrc="/icon/kotlin.svg" title="Kotlin" />
                    <Card imageSrc="/icon/python.svg" title="Python" />
                    <Card imageSrc="/icon/php.svg" title="PHP" />
                    <Card imageSrc="/icon/typescript.svg" title="TypeScript" />
                </div>
            </div>

            <div className="flex flex-col my-3 gap-6">
                <h4 className="text-2xl font-semibold">Frameworks</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    <Card imageSrc="/icon/asp.svg" title="ASP.NET" />
                    <Card imageSrc="/icon/bootstrap.svg" title="Bootstrap" />
                    <Card imageSrc="/icon/laravel.svg" title="Laravel" />
                    <Card imageSrc="/icon/next-dot-js.svg" title="Next.js" className="bg-white rounded-full" />
                    <Card imageSrc="/icon/node-js.svg" title="Node.js" />
                    <Card imageSrc="/icon/react.svg" title="React" />
                    <Card imageSrc="/icon/tailwind.svg" title="Tailwind" />
                    <Card imageSrc="/icon/vue.svg" title="Vue.js" />
                </div>
            </div>
        </motion.div>
    );
};

export default SkillGroup;