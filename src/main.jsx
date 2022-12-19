import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
// eslint-disable-next-line import/extensions,import/no-unresolved
import WebGL from 'three/addons/capabilities/WebGL.js';
import Experience from './Experience';

if (!WebGL.isWebGLAvailable()) {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('root').appendChild(warning);
} else {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Experience />
    </React.StrictMode>
  );
}
