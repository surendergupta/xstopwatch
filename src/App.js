import { useRef, useState } from 'react';
import './App.css';
function App() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const timerRef = useRef(null);

  const handleStartTimer = () => {
    if(!isStart){
      setIsStart(true);
      timerRef.current = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 59) {
            setMinute((prevMinute) => prevMinute + 1);
            return 0;
          }
          return prevSecond + 1
        });
      }, 1000);
    }   
  }
  const handleStopTimer  = () => {
    if (isStart) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsStart(false);
    }
  }
  const handleResetTimer = () => {
    handleStopTimer();
    setSecond(0);
    setMinute(0);
  }

  // useEffect(() => {
  //   return () => {
  //     handleStopTimer();
  //   }
  // }, []);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div>
        <div className="stopwatch">Time: {minute < 10 ? `${minute}` : minute}:{second < 10 ? `0${second}` : second} </div>
        { isStart ? (
          <button onClick={handleStopTimer}>Stop</button>
        ) : (
          <button onClick={handleStartTimer}>Start</button>
        )}
        <button onClick={handleResetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
