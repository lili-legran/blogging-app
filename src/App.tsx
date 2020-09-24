import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TopBar } from './components/topBar';
import Routes from './pages/routes';

const App: React.FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <TopBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
