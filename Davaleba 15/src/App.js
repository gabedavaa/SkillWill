import React from 'react';
import './styles/styles.css'; 
import useLocalStorage from './hooks/useLocalStorage';
import useDetectDevice from './hooks/useDetectDevice';

function App() {
  const [themeColor, toggle] = useLocalStorage('theme', true)
  const device = useDetectDevice()
 console.log(device);

  return (
    <div>
    {device === 'MOBILE' ? (
      <>
        <h1>Hello, Mobile User!</h1>
        {/* <button onClick={() => toggle(prev => !prev)}>Toggle Theme</button> */}
      </>
    ) : (
      <><div className={`fullscreen-${themeColor ? 'light' : 'dark'}`}>
        <h1>Hello, Desktop User!</h1>
        <button onClick={() => toggle(prev => !prev)}>Toggle Theme</button>
        </div>   
      </>
    )}
    </div>
  );
}

export default App;
