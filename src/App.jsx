import React from 'react';
import Router from './Router';
import './components/app.css';

/**
 * 전역상태 관리, 전역 스타일, theme, Routers.jsx 만
 * @returns {JSX.Element}
 * @constructor
 */

function App() {

  return (
    // <React.StrictMode>
      <Router/>
    // </React.StrictMode>
  )
}

export default App;