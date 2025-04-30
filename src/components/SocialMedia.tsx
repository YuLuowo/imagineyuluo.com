import React from 'react';
import { SocialIcon } from 'react-social-icons'

const SocialMedia = () => {
    return (
        <div className="flex space-x-4 bg-transparent">
            <SocialIcon url="https://github.com/YuLuowo" fgColor="white" bgColor="transparent" />
            <SocialIcon url="https://discord.gg/yNXzfkWmTr" fgColor="white" bgColor="transparent" />
            <SocialIcon url="https://www.instagram.com/c.0415/" fgColor="white" bgColor="transparent" />
        </div>
    );
};

export default SocialMedia;