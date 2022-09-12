import './App.css';
import Title from './Components/Title';
import InputSection from './Components/InputSection';
import ResultSection from './Components/ResultSection';
import { AppContext } from './Components/appContext';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState(0);
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0);
 
  return (
    <div className="App">
      <AppContext.Provider value={{bill, setBill, selectedBtn, setSelectedBtn, tip, setTip, customTip, setCustomTip, isClicked, setIsClicked, num, setNum, total, setTotal}}>
       <Title />
       <InputSection />
       <ResultSection/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
