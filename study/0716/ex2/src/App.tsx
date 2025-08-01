import GreetingPage from './pages/GreetingPage';
import ProductListPage from  './pages/ProductListPage'
import QuotePage from './pages/QuotePage'
import logo from './logo.svg';
import './App.css';
import ApplyScrapPage from './pages/ApplyScrapPage';
import QuotationPage from './pages/QuotationPage';
import ScrapCompletePage from './pages/ScrapCompletePage';
import { useState } from 'react';

function App() {
  const [stage, setStage] = useState(1);
  const [count, setCount] = useState(0);
  

  const prevStage = () => {
    setStage(stage -1);
  }

  const nextStage = () => {
    setStage(stage +1);
  }

  const countUp = () => {
    setCount (count +1);
  }



 

  
  return (
  <div>
    <button className="bg-blue-500 p-4 m-4" onClick={countUp}>카운트증가{count}</button>
    {/* <button className="bg-blue-500 p-4 m-4" onClick={countDown}>카운트감소{count}</button> */}
    <button className="bg-blue-500 p-4 m-4" onClick={prevStage}>이전</button>
    <span>{stage}</span>
    <button className="bg-blue-500 p-4 m-4" onClick={nextStage}>다음</button>
    {stage ===1 && <GreetingPage />}
    {stage ===2 &&<ProductListPage />}
    {stage ===3 &&<QuotePage />}
    {stage ===4 &&<ApplyScrapPage />}
    {stage ===5 &&<QuotationPage />}
    {stage ===6 &&<ScrapCompletePage />}
  </div>)
}

export default App;
