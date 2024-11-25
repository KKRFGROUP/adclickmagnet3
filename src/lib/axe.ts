// utils/axe.js
import React from 'react';
import { default as axe } from '@axe-core/react';

export default function initAxe() {
  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const ReactDOM = require('react-dom');
    axe(React, ReactDOM, 1000);
  }
}
