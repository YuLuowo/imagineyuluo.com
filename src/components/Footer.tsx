import React from 'react';

const Footer = () => {
    return (
        <footer className={"bg-gray-900 text-white text-sm md:text-xl text-center py-6"}>
            <p>Copyright © {new Date().getFullYear()} ImagineYuLuo. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;