
import Contactcard from "./Contactcard"
import{Link} from 'react-router-dom'
import Header from './components/Header'

const contactlist =(props)=>{
    console.log(props)

  const deletecontacthandler=(id)=>{
    props.getcontact(id)

  }
  // const  contacts=[{
  //   name:"hormese",
  //   email:"hormese1236johnson@gmail.com"
  // },]
 const contactdisplay=props.contact.map((contact)=>{
return(
  <Contactcard contactli={contact} clickHander={deletecontacthandler} key={contact.id}/>
    

)
 })
 return(<div>
  <Header/>
    <div>{contactdisplay}
 
  
 <Link to="/add">   <button type="button" class="btn btn-primary" >Add contact</button></Link>
 </div>
 </div>
      )
}

export default contactlist;