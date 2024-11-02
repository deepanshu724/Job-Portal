import React from 'react';
import { Outlet } from 'react-router-dom';
import '../app.css'; 
import Header from '@/components/Header';

const AppLayout = () => {
  return (
    <div>
     <div className="grid-background"></div>
      <main className='min-h-screen container'>
        <Header/>
      <Outlet />
      </main>
     
    </div>
  );
};

export default AppLayout;