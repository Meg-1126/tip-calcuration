import React from "react";

export default function ResultSection (props) {
  const {bill, setBill, tip, setTip, total, setTotal} = props;

  const calculateTip = () => {
    setTip(bill * 0.05);
  }

  const handleClick = () => {
    alert("Reset button is clicked"); //change this later
  }

  return (
    <section>
      <p>Tip Amount<br/>/ person</p>
      <p>${tip}</p>
      <p>Total<br/>/ person</p>
      <p>${total}</p>
      <button className="btn__reset" onClick={handleClick}>RESET</button>
    </section>
  );
}