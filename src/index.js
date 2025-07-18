import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WatchlistProvider } from './context/WatchlistContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

serviceWorkerRegistration.register();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WatchlistProvider>
        <App />
    </WatchlistProvider>
);