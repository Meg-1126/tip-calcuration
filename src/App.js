import './App.css';
import Title from './Components/Title';
import InputSection from './Components/InputSection';
import ResultSection from './Components/ResultSection';
import {useState} from 'react';

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <div className="App">
     <Title />
     <InputSection bill={bill} setBill={setBill} tip={tip} setTip={setTip}/>
     <ResultSection bill={bill} setBill={setBill} tip={tip} setTip={setTip} total={total} setTotal={setTotal}/>
    </div>
  );
}

export default App;
