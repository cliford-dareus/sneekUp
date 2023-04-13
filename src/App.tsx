import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import useLocalstorage from './hooks/useLocalstorage';
import { MainContainer } from './utils/styles/globalStyles';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dasboard';
import LockScreen from './pages/LockScreen';

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/lockscreen' element={<LockScreen/>}/>
        <Route element={<ProtectedRoutes />}>
          {/* Add a Layout for navbar */}
          <Route path='/' element={<Dashboard />}/>
        </Route>
      </Routes>
    </MainContainer>
  )
};

export default App;
