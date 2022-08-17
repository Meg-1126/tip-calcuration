import React, {useState} from "react";


export default function InputSection (props) {
  const {bill, setBill, tip, setTip} = props;
  const handleChange = (e) => {
     setBill(e.target.value);
  }

  const handleClick = (e) => {
    console.log(e.target.value);
    if ((e.target.value === "5") && (bill > 0)) {
      setTip(bill*0.05);
    } else if ((e.target.value === "10") && (bill > 0)) {
      setTip(bill*0.1);
    } else if ((e.target.value === "15") && (bill > 0)) {
      setTip(bill*0.15);
    } else if ((e.target.value === "25") && (bill > 0)) {
      setTip(bill*0.25);
    } else if ((e.target.value === "50") && (bill > 0)) {
      setTip(bill*0.5);
    } else {
      alert("You need to input custom number");
    }
  }
  return (
    <section>
      <p>Bill</p>
      <input type="number" placeholder="$" onChange={handleChange}></input>
      <p>Select Tip</p>
      <div className="wrapper__btn">
       <button className="btn__per" onClick={handleClick} value="5">5%</button>
       <button className="btn__per" onClick={handleClick} value="10">10%</button>
       <button className="btn__per" onClick={handleClick} value="15">15%</button>
       <button className="btn__per" onClick={handleClick} value="25">25%</button>
       <button className="btn__per" onClick={handleClick} value="50">50%</button>
       <button className="btn__per" onClick={handleClick} value="custom">Custom</button>
      </div>
      <p>Number of People</p>
      <input type="number" placeholder="How many people...?"></input>
    </section>
  );
}