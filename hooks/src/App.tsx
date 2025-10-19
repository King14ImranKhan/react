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
  const goToPopUp = () => navigate('/pop-up');
  const goToProps = () => navigate('/props');
  const goToModal = () => navigate('/modal');
  const goToMethods = () => navigate('/map-filter-for-each-reduce');
  const goToMemo = () => navigate('/use-memo');

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
        <button onClick={goToPopUp} style={{ margin: 10 }}>
          Pop Up
        </button>
        <button onClick={goToProps} style={{ margin: 10 }}>
          Props
        </button>
        <button onClick={goToModal} style={{ margin: 10 }}>
          Modal
        </button>
        <button onClick={goToMethods} style={{ margin: 10 }}>
          Methods
        </button>
        <button onClick={goToMemo} style={{ margin: 10 }}>
          Memo
        </button>
      </nav>

      <AppRoutes /> {/* Renders the matched route */}
    </>
  );
}

export default App;
