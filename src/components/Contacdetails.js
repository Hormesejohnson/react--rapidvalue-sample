import React, { Component } from "react";
import { Fragment } from "react";
import{Link} from 'react-router-dom'

import employeee from './employeee.jpg'
const Contadetails=(props)=>{
const {name,email}=props.location.state.contact

return(
<div>
<img src={employeee} height='300px' width='300px'></img>
<div classname="employee">
<h5></h5><b>{name}</b><h4></h4><ul><b>{email}</b></ul>
<div>
<Link to="/">
<button class="btn btn-primary">back to contacts</button></Link>
</div>
</div>
</div>

)
}
export default Contadetails