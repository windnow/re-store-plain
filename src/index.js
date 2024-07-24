import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import Logo from './logo.svg'

const App = () => <p>Hello Front-App!<img src={Logo} /></p>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);