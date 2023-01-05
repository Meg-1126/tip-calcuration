import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "./appContext";

export default function InputSection() {
  const calc = useContext(AppContext);
  const theme = { main: "black" };
  const handleChangeBill = (e) => {
    calc.setBill(e.target.value);
  };

  const handleChangeNum = (e) => {
    calc.setNum(e.target.value);
  };

  const handleChangeCustom = (e) => {
    calc.setDisplayInput(e.target.value);
    calc.setCustomInput(e.target.value / 100);
  };

  const handleClick = (e) => {
    if (e.target.value === "5") {
      calc.setSelectedBtn(0.05);
      calc.setIsClicked(!calc.isClicked);
    } else if (e.target.value === "10") {
      calc.setSelectedBtn(0.1);
      calc.setIsClicked(!calc.isClicked);
    } else if (e.target.value === "15") {
      calc.setSelectedBtn(0.15);
      calc.setIsClicked(!calc.isClicked);
    } else if (e.target.value === "25") {
      calc.setSelectedBtn(0.25);
      calc.setIsClicked(!calc.isClicked);
    } else if (e.target.value === "50") {
      calc.setSelectedBtn(0.5);
      calc.setIsClicked(!calc.isClicked);
    }
  };

  const handleClickCalc = (e) => {
    if (!calc.bill) {
      alert("You must input the bill!");
    } else if (!calc.num) {
      alert("You must input the number of people!");
    } else if (!calc.selectedBtn && !calc.customInput) {
      alert("You must set the tip percentage");
    } else {
      console.log("submit");
      if (calc.customInput) {
        calc.setCustomTip((calc.bill * calc.customInput) / calc.num);
        calc.setTotal(
          calc.bill / calc.num + (calc.bill * calc.customInput) / calc.num
        );
      } else {
        calc.setTotal(
          calc.bill / calc.num + (calc.bill * calc.selectedBtn) / calc.num
        );
        calc.setTip((calc.bill * calc.selectedBtn) / calc.num);
      }
    }
  };

  return (
    <section className="section__input">
      <p className="p__step">1. Enter your bill</p>
      <input
        className="input__bill"
        type="number"
        value={calc.bill}
        placeholder="$"
        onChange={handleChangeBill}
      />
      <div className="wrapper__btn">
        <p className="p__step">2. Add a tip (%)</p>
        <ThemeProvider theme={theme}>
          <button
            className={
              calc.isClicked && calc.selectedBtn === 0.05 && "btn__clicked"
            }
            onClick={handleClick}
            value="5"
          >
            5%
          </button>
          <button
            className={
              calc.isClicked && calc.selectedBtn === 0.1 && "btn__clicked"
            }
            onClick={handleClick}
            value="10"
          >
            10%
          </button>
          <button
            className={
              calc.isClicked && calc.selectedBtn === 0.15 && "btn__clicked"
            }
            onClick={handleClick}
            value="15"
          >
            15%
          </button>
          <button
            className={
              calc.isClicked && calc.selectedBtn === 0.25 && "btn__clicked"
            }
            onClick={handleClick}
            value="25"
          >
            25%
          </button>
          <button
            className={
              calc.isClicked && calc.selectedBtn === 0.5 && "btn__clicked"
            }
            onClick={handleClick}
            value="50"
          >
            50%
          </button>
        </ThemeProvider>
        <input
          type="number"
          value={calc.displayInput}
          className="input__custom"
          placeholder="Custom tip amount(%)"
          onChange={handleChangeCustom}
          disabled={calc.selectedBtn !== 0 ? true : false}
        />
      </div>
      <p className="p__step">3. How many people do you split a bill with?</p>
      <input
        className="input__people"
        type="number"
        value={calc.num}
        placeholder="How many people...?"
        onChange={handleChangeNum}
      ></input>
      <br />
      <button className="btn__calculate" onClick={handleClickCalc}>
        Calculate
      </button>
    </section>
  );
}
