import React from "react";


class Addcontact extends React.Component{
state={
    
    name:"",
    email:""
}
add=(e)=>{
e.preventDefault();
if(this.state.name===""||this.state.email===""){
    alert("mandatory")
    return
 
}
this.props.Addcontacthandler(this.state);
this.setState({name:"",email:""})
this.props.history.push("/")

};


render(){
    return(
  <div>
        <h2>ADD CONTACT HERE!</h2>
   
 
      
     
        <form>
<label for="email"> NAME:</label>
<input type="text" id="email" name="email" placeholder="enter your name" value={this.state.name}  onChange={(e)=>{
    this.setState({name:e.target.value})
}}/>


<ul></ul>


<label for="email"> EMAIL:</label>
<input type="email" id="email" name="email"  placeholder="enter your email" value={this.state.email} onChange={(e)=>{
    this.setState({email:e.target.value})
}}/>

<ul></ul>
<button type="submit" className="btn btn-primary" onClick={this.add}>Submit</button>
   



</form>
</div>

    );
}
}
export default Addcontact;