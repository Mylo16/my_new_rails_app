import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './greeting';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Greeting />} />
      </Routes>
    </>
  );
}