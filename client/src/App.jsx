import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoPage from './pages/TodoPage';
import ExamplePage from './pages/ExamplePage';
import ListPage from './pages/ListPage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Header />
          <main className="pt-4">
            <Routes>
              <Route path='/' element={<TodoPage />} />
              <Route path='/example' element={<ExamplePage />} />
              <Route path='/list' element={<ListPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
