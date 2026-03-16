import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import '../App.css';

export default function MainLayout() {
  return (
    <div className='page'>
      <Header />
      <div className='layout-content'>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
