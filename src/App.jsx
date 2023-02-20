import React from 'react';
import HomePage from 'routes/HomePage';
import Header from 'components/Header';
import CountryProvider from 'components/CountryProvider';
import CountryPage from 'routes/CountryPage';
import Error404 from 'routes/Error404';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='h-screen dark:bg-DM_VeryDarkBlue'>
      <CountryProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/name/:name' element={<CountryPage />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </CountryProvider>
    </div>
  );
};

export default App;
