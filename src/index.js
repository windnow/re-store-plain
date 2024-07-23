import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';

const App = () => <p>Hello Front-App!</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);