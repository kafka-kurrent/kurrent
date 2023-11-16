import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Login.jsx';
import './login.scss';

const App = () => {
  return <Login />;
};
const root = createRoot(document.querySelector('#root'));
root.render(<App />);
export default App;
