import React, { Component } from "react";
import { Fragment } from "react";
import{Link} from 'react-router-dom'

import Contadetails from './components/Contacdetails'

import Sample_User_Icon from './Sample_User_Icon.png'
const Contactcard=(props)=>{
const{id,name,email}=props.contactli
return(
<div>

<div className="box"><ul></ul><ul></ul>
<img src={Sample_User_Icon} height="20px" alt="noimage"/>
<b>NAME:</b>    <Link to="/" style={{textDecoration:"none"}}  className="Link" to ={{pathname:`/Contadetails/${id}`,state:{contact:props.contactli}}}> {name} 

 </Link >
 

<ul></ul>
<b>EMAIL:</b> {email}<ul></ul>
<ion-icon   onClick={() => props.clickHander(id)} name="trash-outline"  style={{color:'red', }}></ion-icon><ul></ul>
</div>

</div>

)
}
export default Contactcard