import './App.css';
import Title from './Components/Title';
import InputSection from './Components/InputSection';
import ResultSection from './Components/ResultSection';
import {useState} from 'react';

function App() {
  const [bill, setBill] = useState(0);
  return (
    <div className="App">
     <Title />
     <InputSection bill={bill} setBill={setBill}/>
     <ResultSection />
    </div>
  );
}

export default App;
