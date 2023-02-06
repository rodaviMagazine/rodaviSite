import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Magazine from "./container/Magazine";

const Router = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/magazine" element={<Magazine />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;