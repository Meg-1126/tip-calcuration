import './App.css';
import Title from './Components/Title';
import InputSection from './Components/InputSection';
import ResultSection from './Components/ResultSection';
import { AppContext } from './Components/appContext';
import { useState } from 'react';
import StyledApp from './Components/StyledApp'

function App() {
  const [bill, setBill] = useState(0);
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [customInput, setCustomInput] = useState(0);
  const [displayInput, setDisplayInput] = useState("Custom Tip(%)");
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0);
 
  return (
   <AppContext.Provider value={{bill, setBill, selectedBtn, setSelectedBtn, customInput, setCustomInput, displayInput, setDisplayInput, tip, setTip, customTip, setCustomTip, isClicked, setIsClicked, num, setNum, total, setTotal}}>
    <StyledApp>
    <div className="App">
       <Title />
       <div className='wrapper__sections'>
       <InputSection />
       <ResultSection/>
       </div>
    </div>
    </StyledApp>
   </AppContext.Provider>
  );
}

export default App;
