import SpinWheel from "./components/SpinWheel/SpinWheel.js";
import Coupon from "./components/Coupon/Coupon.js";
import Form from "./components/Form/Form";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [ active, setActive ] = useState("Form");
  const [ coupon, setCoupon ] = useState("");
  const [ label, setLabel ] = useState("");
  return (
    <>
      {active === "Form" && <Form setActivePage={setActive} />}
      {active === "SpinWheel" && <SpinWheel setActiveCoupon={setCoupon} setActiveLabel={setLabel} setActivePage={setActive} />}
      {active === "Coupon" && <Coupon coupon={coupon} label={label} setActivePage={setActive} />}
    </>
  );
}

export default App;
