import React, { useContext } from "react";
import Datacontext from "./dataContext"
import SingleCard from "./singlecard"

export default  function StatComponents(props){
  const {state}= useContext(Datacontext);
  console.log(state);
  return(
    <>
    <SingleCard  title={"Country"} value={state.CountryName} />
    <SingleCard title={"Total Cases"} value={state.TotalCases} />
    <SingleCard title={"Recovered"} value={state.RecoveredCases} />
    <SingleCard  title={"Total Death"} value={state.deaths} />
    <SingleCard  title={"Active Cases"} value={state.ActiveCases} />
    <SingleCard  title={"New Cases"} value={state.NewCases} />

    </>
  )
  
}

