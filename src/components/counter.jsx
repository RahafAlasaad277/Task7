import  { useState } from 'react';

function Counter() {
  //
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1); // الزيادة الافتراضية 1

  // 
  const handleClick = () => {
    //
    setCount(prevCount => {
      const newCount = prevCount + increment;
      
      // 
      if (newCount >= 10) {
        setIncrement(10);
      }
      
      return newCount;
    });
  };

  return (
    <div>
      <p>العدد: {count}</p>
      <button onClick={handleClick}>زيادة</button>
    </div>
  );
}

export default Counter;
