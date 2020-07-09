import React, { Component } from "react";
import Entry from "./containers/Entry/Entry";


const Login = (props) => {
  const { navigateTo } = props;
  
  
  
    return (
     <Entry navigateTo={navigateTo}/>
    );
  }


export default Login;
