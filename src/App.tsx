import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const logoStyle = 'logo h-24 p-6';

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='vite.svg' className={`${logoStyle} hover:drop-shadow-[0_0_2em_#646cffaa]`} alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className={`${logoStyle} hover:drop-shadow-[0_0_2em_#61dafbaa]`} alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='p-8'>
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='text-[#888]'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
