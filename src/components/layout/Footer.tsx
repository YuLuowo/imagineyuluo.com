import React from 'react';
import SocialMedia from "@/components/ui/SocialMedia";

const Footer = () => {
    return (
        <footer className="mt-2 text-gray-400 text-lg text-center">
            Copyright © {new Date().getFullYear()} ImagineYuLuo. All Rights Reserved.
            Made with ❤️ using <span className="text-purple-400">Next.js</span> & <span className="text-purple-400">TailwindCSS</span>.
            <div className="flex justify-center pt-2 pb-4">
                <SocialMedia />
            </div>
        </footer>
    );
};

export default Footer;