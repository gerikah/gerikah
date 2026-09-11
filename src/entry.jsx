import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Portfolio } from './components/portfolio.jsx';

const root = document.getElementById('app');
document.body.classList.add('folder-theme');
if (root.hasChildNodes()) hydrateRoot(root, <Portfolio />);
else createRoot(root).render(<Portfolio />);
