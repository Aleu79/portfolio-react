import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <AppRouter />
        </main>
        <Footer />
      </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
