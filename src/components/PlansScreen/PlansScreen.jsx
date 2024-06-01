import { useState } from "react";
import "./PlansScreen.css";
function PlansScreen({title,discription}) {
    const[products,setProducts]= useState([])
  return <div className="plansScreen_plan">
    <div className="planeScreen_info">
        <h5>{title}</h5>
        <h6>{discription}</h6>
    </div>
    <button>Subscribe</button>
  </div>;
}

export default PlansScreen;
