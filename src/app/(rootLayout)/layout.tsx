import React from "react";

const rootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            navbar
            {children}
            footer
        </div>
    );
};

export default rootLayout;
