import React from 'react';
import { Outlet } from 'react-router-dom';

const MainTemplate = () => {
    return (
        <div>
            Main Template
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainTemplate;