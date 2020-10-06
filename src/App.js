import React from 'react';
import './App.css';
import PageBottom from './components/PageBottom/PageBottom';
import PageTop from './components/PageTop/PageTop';

function App() {
  return (
    <div className="App">
      <header>
        <PageTop />
      </header>
      <main>
        <PageBottom />
      </main>
    </div>
  );
}

export default App;
