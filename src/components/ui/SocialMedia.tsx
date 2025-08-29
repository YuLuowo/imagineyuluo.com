import React from 'react';
import { SocialIcon } from 'react-social-icons'

const SocialMedia = () => {
    return (
        <div className="flex space-x-3 bg-transparent">
            <SocialIcon className="max-w-10" url="https://github.com/YuLuowo" fgColor="white" bgColor="transparent" />
            <SocialIcon className="max-w-10" url="https://discord.gg/yNXzfkWmTr" fgColor="white" bgColor="transparent" />
            <SocialIcon className="max-w-10" url="https://www.instagram.com/c.0415/" fgColor="white" bgColor="transparent" />
        </div>
    );
};

export default SocialMedia;