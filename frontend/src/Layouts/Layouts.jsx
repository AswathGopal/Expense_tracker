// Layout.jsx
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div className="p-8 h-full flex gap-8">
            {children}
        </div>
    );
};

const InnerLayout = ({ children }) => {
    return (
        <div className="p-8 md:p-6 w-full">
            {children}
        </div>
    );
};

export { MainLayout, InnerLayout };
