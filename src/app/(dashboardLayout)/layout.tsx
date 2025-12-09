import React from "react";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            sidebar
            {children}
            dashboard footer
        </div>
    );
};

export default dashboardLayout;
