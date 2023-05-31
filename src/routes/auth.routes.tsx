import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
        </Routes>
    );
}
export default AppRoutes;