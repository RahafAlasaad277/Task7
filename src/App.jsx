import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isMaxReached, setIsMaxReached] = useState(false); // حالة لتحديد إذا وصلنا للحد الأقصى (1000)
  const [showWelcomePopup, setShowWelcomePopup] = useState(true); // حالة لعرض نافذة الترحيب
  const [showPopup, setShowPopup] = useState(false); // حالة لعرض نافذة منبثقة عند الوصول للعدد المحدد
  const [backgroundColor, setBackgroundColor] = useState('white'); // حالة لتغيير لون الخلفية

  // 
  const increment = () => {
    if (count >= 1000) {
      setIsMaxReached(true);
    } else if (count >= 100) {
      setCount(count + 100);  
    } else if (count >= 10) {
      setCount(count + 10);   
    } else {
      setCount(count + 1);    
    }
  };

  // 
  const decrement = () => {
    if (count >= 100) {
      setCount(count - 100);  
    } else if (count >= 10) {
      setCount(count - 10);  
    } else {
      setCount(count - 1);   
    }
  };

  // 
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowWelcomePopup(false); // 
    }, 3000); // النافذة تظهر لمدة 3 ثواني

   
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
   
    if (count === 10 || count === 100 || count === 1000) {
      setShowPopup(true);
      setBackgroundColor('lightblue'); 
      
      const timer = setTimeout(() => {
        setShowPopup(false);
        setBackgroundColor('white'); 
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [count]); 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* نافذة الترحيب */}
      {showWelcomePopup && (
        <div className="popup">
          <h2>مرحبًا بك في تطبيقنا!</h2>
        </div>
      )}

      {/* عند الوصول إلى القيم المحددة (10, 100, 1000) */}
      {showPopup && (
        <div className="popup">
          <h2>تم الوصول إلى عدد مهم: {count}</h2>
        </div>
      )}

      <div className="card" style={{ backgroundColor }}>
        { !isMaxReached ? (
          <button onClick={increment}>
            count is {count}
          </button>
        ) : (
          <button onClick={decrement}>
            count is {count}
          </button>
        )}
      </div>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
