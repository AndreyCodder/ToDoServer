import React from 'react';
import { Route, Routes } from 'react-router';
import About from './Pages/About';
import My404page from './Pages/My404page';
import Posts from './Pages/Posts';

const AppRouter = () => {
    return (
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<My404page />} />
      </Routes>
    );
};

export default AppRouter;