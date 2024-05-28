import React, { useState, useEffect } from "react";
import "./nav.css";
import { actionTypes } from "../component/reducer";
import { useStateValue } from "../component/StateProvider";
import Button from '@material-ui/core/button'
function Nav() {
  const [name, setName] = useState(false);
  const [{ login }, dispatch] = useStateValue();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setName(true);
      } else setName(false);
    });
   
  }, []);

  const logout = ()=>{
    dispatch({
      type:actionTypes.CLEAR,
      login:localStorage.clear()
    })
  }

  return (
    <div className="net">
      {/* <div className={`${name && "img"}`}>
        <div style={{display:"flex"}}>
        <img
          src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="if"
        />
        </div>
      </div>
      <div className="buy">
      <Button variant="contained" style={{backgroundColor:"red",color:"white",padding:"5px",width:"80px",fontWeight:"bold",marginTop:"10px",marginTop:"40px"}}>Logout</Button>
      </div> */}
       <div className={`${name && "img"}`}>
      <img style={{width:"100px",height:"40px",marginTop:"10px"}}
          src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="if"
        />
        </div>
         <Button onClick={()=>logout()} variant="contained" style={{backgroundColor:"red",color:"white",padding:"2px",width:"90px",fontWeight:"bold",marginTop:"45px"}}>Logout</Button>
         
    </div>
  );
}

export default Nav;
