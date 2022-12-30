import React, { useContext } from "react";
import { AppContext } from "./appContext";

export default function ResultSection () {
  const calc = useContext(AppContext);
  
  const handleClickReset = () => {
    calc.setBill(0);
    calc.setSelectedBtn(0);
    calc.setCustomInput(0);
    calc.setDisplayInput("Custom");
    calc.setCustomTip(0);
    calc.setIsClicked(false);
    calc.setNum(0);
    calc.setTip(0);
    calc.setTotal(0);
  };

  return (
    <section className="section__result">
      <p>Tip Amount</p><p>/ person</p>
      {(calc.num !== 0) && (calc.selectedBtn !== 0) && (calc.num !== 0)
      ?<p>${calc.tip.toFixed(2)}</p>
      :(calc.num !== 0) && (calc.customInput !== 0) && (calc.num !== 0)?<p>${calc.customTip.toFixed(2)}</p>
      :<p>$0.00</p>}
      <p>Total</p><p>/ person</p>
      {(calc.num !== 0) && ((calc.selectedBtn !== 0)||(calc.customInput !== 0)) && (calc.num !== 0)
      ?<p>${calc.total.toFixed(2)}</p>:<p>$0.00</p>}
      <button className="btn__reset" onClick={handleClickReset}>RESET</button>
    </section>
  );
}