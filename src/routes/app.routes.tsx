import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Lists from '../pages/Lists';
import Layout from '../components/Layout';

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='lists/:type' element={<Lists />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
