import React from 'react';
import { renderToString } from 'react-dom/server';
import { Portfolio } from './components/portfolio.jsx';

export function renderPortfolio() {
  return renderToString(<Portfolio />);
}
