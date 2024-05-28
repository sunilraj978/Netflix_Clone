import React from "react";
import "./App.css";
import ROW from "./component/row";
import request from "./component/request";
import Banner from "./component/banner";
import Nav from "./component/nav";
import { actionTypes } from "./component/reducer";
import { useState } from "react";
import { useStateValue } from "./component/StateProvider";
import Button from '@material-ui/core/button'
function App() {
 
  
  const [{ login }, dispatch] = useStateValue();
  const [name,setName] = useState("")
  
  const poll = ()=>{
    console.log(name)
    dispatch({
      type:actionTypes.SET_LOGIN,
      login:localStorage.setItem("name",JSON.stringify(name))
    })
    setName("")
  }
  return (
    <div className="App">
      {
        (localStorage.getItem("name"))?(
          <div>
            <Nav />
      <Banner />
      <ROW title={"NETFLIX ORIGINALS"} fetchUrl={request.fetchNetflix} />
      <ROW title={"Trending Now"} fetchUrl={request.fetchTrending} />
      <ROW title={"Top Rated Movies"} fetchUrl={request.fetchTopRate} />
      <ROW title={"Action Movies"} fetchUrl={request.Action} />
      <ROW title={"Romance Movies"} fetchUrl={request.Romance} />
      <ROW title={"Horror Movies"} fetchUrl={request.Horror} />
      <ROW title={"Documentries"} fetchUrl={request.Documentries} />
            </div>
        )
        :
       (
         <div className="back">
           <div className="overlay">
           <img style={{width:"100px",height:"60px",marginTop:"10px"}}
          src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="if"
        />
           <div className="align">
           <h1 className="h1">Unlimited movies,</h1>
           <h1 className="h1">TV shows traliers.</h1>
            <p className="p">Watch anywhere. Cancel anytime.</p>
            <input type="email" required  style={{backgroundColor:"white"}} placeholder="Enter Email Id"  value={name} onChange={(e)=>setName(e.target.value)}/>
            {
              name?
              (<Button onClick={()=>poll()} variant="contained" style={{backgroundColor:"red",color:"white",padding:"13px",width:"250px",fontWeight:"bold",marginTop:"10px"}}>Login</Button>)
              :
              ""
            }
             </div>
             </div>
           </div>
       )
      }
    </div>
  );
}

export default App;
