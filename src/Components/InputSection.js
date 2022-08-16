import React, {useState} from "react";


export default function InputSection (props) {
  const {bill, setBill} = props;
  const handleChange = (e) => {
     setBill(e.target.value);
  }
  return (
    <section>
      <p>Bill</p>
      <input placeholder="$" onChange={handleChange}></input>
      <p>Select Tip</p>
      <div className="wrapper__btn">
       <button className="btn__percent">5%</button>
       <button className="btn__percent">10%</button>
       <button className="btn__percent">15%</button>
       <button className="btn__percent">25%</button>
       <button className="btn__percent">50%</button>
       <button className="btn__percent">Custom</button>
      </div>
      <p>Number of People</p>
      <input></input>
    </section>
  );
}