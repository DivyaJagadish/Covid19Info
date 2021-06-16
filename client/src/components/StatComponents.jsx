import React, { useContext } from "react";
import Datacontext from "./dataContext"
import SingleCard from "./singlecard"
import "../statComponents.css";

export default  function StatComponents(props){
  const {state}= useContext(Datacontext);
  console.log(state);
  return(
  <>
   <div className = "stat">
    <SingleCard title={"Country"} value={state.CountryName} />
    <SingleCard title={"Total Cases"} value={state.TotalCases} />
    <SingleCard title={"Recovered"} value={state.RecoveredCases} />
    <p>
    <SingleCard  title={"Total Death"} value={state.Totaldeath} />
    <SingleCard  title={"Active Cases"} value={state.ActiveCases} />
    <SingleCard  title={"New Cases"} value={state.NewCases} />
    </p>
   </div>
   </>
  )
}

