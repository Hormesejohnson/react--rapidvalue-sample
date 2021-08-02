import React,{useState,useEffect} from "react";
import {BrowserRouter as  Router, Switch,Route} from "react-router-dom";
import Contadetails from "./Contacdetails";

import {uuid} from "uuidv4"

import Contactlist from "../Contact";
import Addcontact from "./Addcontact";


function App() {
  const LOCAL_STORAGE_KEY="contacts"
const [contact,setcontacts]=useState([])
const Addcontacthandler=(contacts)=>{

  //  setcontacts([...contact, { id: uuid(), ...contact }]);
  setcontacts([...contact,{ id: uuid(), ...contacts }]);
}
const removecontacthandler=(id)=>{
const newcontactlist=contact.filter((contact)=>{
return contact.id!==id
});
setcontacts(newcontactlist)
}

// useEffect(()=>{const retrievecontacs=JSON.parse(localStorage.getItem (LOCAL_STORAGE_KEY,JSON.stringify(contact))

// if(retrievecontacs) setcontacts(retrievecontacs)},[]);
// useEffect(()=>{
//   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contact))

    
// },[contact])
useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveContacts) setcontacts(retriveContacts);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
}, [contact]);


  return (
    <div>


 
  <Router>

 
   <Switch>
 
 
   <Route path="/add"  exact render={(props)=>(<Addcontact{...props} Addcontacthandler={Addcontacthandler}/>)}/>
   <Route path="/" exact render={(props)=>(<Contactlist {...props}contact={contact} getcontact={removecontacthandler}/>)}/>

</Switch>

  <Route path="/Contadetails/:id" component={Contadetails}/>
  
    </Router>
    

 

 
   {/* {/* {/* /* <Addcontact Addcontacthandler={Addcontacthandler}/>
  // <Contactlist contact={contact} getcontact={removecontacthandler} /> */   }
 
  </div>


  )
}

export default App;
