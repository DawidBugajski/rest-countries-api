import React from 'react';
import HomePage from 'routes/HomePage';
import Header from 'components/Header';
import CountryProvider from 'components/CountryProvider';
import CountryPage from 'routes/CountryPage';
import ErrorPage from 'routes/ErrorPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <CountryProvider>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/name/:name' element={<CountryPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </CountryProvider>
  );
};

export default App;

// jak usunąć to mignięcie
// jak ogarnąć kolejny fetch z innym adresel url
// po kliknięciu w pańśtwo i cofnięiu nie powinno mi resetować ustawień, czyli jak sprawdziłem węgry i cofnąłem to powinienem mieć dalej węgry wpisane w wyszukiwarce oraz jeśli był wybrany region to region
