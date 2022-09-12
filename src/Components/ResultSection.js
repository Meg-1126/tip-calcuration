import React, { useContext } from "react";
import { AppContext } from "./appContext";

export default function ResultSection () {
  const calc = useContext(AppContext);
  
  const handleClick = () => {
    calc.setBill(0);
    calc.setSelectedBtn(0);
    calc.setCustomTip(0);
    calc.setIsClicked(false);
    calc.setNum(0);
    calc.setTip(0);
    calc.setTotal(0);
  }

  return (
    <section className="section__result">
      <p>Tip Amount<br/>/ person</p>
      <p>${calc.tip}</p>
      <p>Total<br/>/ person</p>
      <p>${calc.total}</p>
      <button className="btn__reset" onClick={handleClick}>RESET</button>
    </section>
  );
}