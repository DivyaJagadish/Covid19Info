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

    <SingleCard title={"Total Cases"} value={state.TotalCases} color ={"blue"} />
    <SingleCard title={"Recovered"} value={state.RecoveredCases} color ={"green"} />
    <SingleCard  title={"Total Death"} value={state.Totaldeath}  color ={"red"}/>
    <SingleCard  title={"Active Cases"} value={state.ActiveCases}  color ={"yellow"}/>
    <SingleCard  title={"New Cases"} value={state.NewCases}  color ={"red"} />
     <SingleCard title={"Recovered today"} value={state.todayRecovered} color ={"green"} />
     <SingleCard  title={"Today Death"} value={state.todayDeath}  color ={"red"}/>
 
   </div>
   </>
  )
}

