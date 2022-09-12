import React, { useContext } from "react";
import { AppContext } from "./appContext";

export default function InputSection () {
  const calc = useContext(AppContext);

  const handleChangeBill = (e) => {
     calc.setBill(e.target.value);
  }

  const handleChangeNum = (e) => {
     calc.setNum(e.target.value);
     calc.setTip((calc.bill*calc.selectedBtn)/e.target.value);
     calc.setTotal((calc.bill/e.target.value)+((calc.bill*calc.selectedBtn)/e.target.value));
  }

  const handleChangeCustom = (e) => {
    calc.setSelectedBtn(e.target.value/100);
  }

  const handleClick = (e) => {
      if ((e.target.value === "5") && (calc.bill > 0)) {
        alert(e.target.value + "% is selected.");
        calc.setSelectedBtn(0.05);
      } else if ((e.target.value === "10")) {
        alert(e.target.value + "% is selected.");
        calc.setSelectedBtn(0.1);
      } else if ((e.target.value === "15")) {
        alert(e.target.value + "% is selected.");
        calc.setSelectedBtn(0.15);
      } else if ((e.target.value === "25")) {
        alert(e.target.value + "% is selected.");
        calc.setSelectedBtn(0.25);
      } else if ((e.target.value === "50")) {
        alert(e.target.value + "% is selected.");
        calc.setSelectedBtn(0.5);
      } 
  }
  return (
    <section className="section__input">
      <p>Bill</p>
      <input type="number" value={calc.bill} placeholder="$" onChange={handleChangeBill}></input>
      <div className="wrapper__btn">
      <p>Select Tip (%)</p>
       <button className="btn__per" onClick={handleClick} value="5">5%</button>
       <button className="btn__per" onClick={handleClick} value="10">10%</button>
       <button className="btn__per" onClick={handleClick} value="15">15%</button>
       <button className="btn__per" onClick={handleClick} value="25">25%</button>
       <button className="btn__per" onClick={handleClick} value="50">50%</button>
       <input type="number" value={calc.selectedBtn} className="input__custom" placeholder="Custom tip" onChange={handleChangeCustom}></input>
      </div>
      <p>Number of People</p>
      <input type="number" value={calc.num} placeholder="How many people...?" onChange={handleChangeNum} ></input>
    </section>
  );
}