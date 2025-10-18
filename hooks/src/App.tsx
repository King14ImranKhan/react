import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  const navigate = useNavigate();

  const goToUseState = () => navigate('/use-state');
  const goToUseEffect = () => navigate('/use-effect');
  const goToUseRef = () => navigate('/use-ref');
  const goToUseContext = () => navigate('/use-context');
  const goToUseReducer = () => navigate('/use-reducer');
  const goToUseCallback = () => navigate('/use-callback');

  return (
    <>
      <nav style={{ margin: 10 }}>
        <button onClick={goToUseState} style={{ margin: 10 }}>
          Use State
        </button>
        <button onClick={goToUseEffect} style={{ margin: 10 }}>
          Use Effect
        </button>
        <button onClick={goToUseRef} style={{ margin: 10 }}>
          Use Ref
        </button>
        <button onClick={goToUseContext} style={{ margin: 10 }}>
          Use Context
        </button>
        <button onClick={goToUseReducer} style={{ margin: 10 }}>
          Use Reducer
        </button>
        <button onClick={goToUseCallback} style={{ margin: 10 }}>
          Use Callback
        </button>
      </nav>

      <AppRoutes /> {/* Renders the matched route */}
    </>
  );
}

export default App;
