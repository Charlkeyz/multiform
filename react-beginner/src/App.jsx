/* eslint-disable no-unused-vars */
import { useEffect, useReducer, useState } from 'react'

import './App.css'
import NextButton from './NextButton'
import Name from './Name'
import EmailPhone from './EmailPhone'
import Password from './Password'
// import { useReducer } from 'react'



function App() {
  
  const initialForm = {
    index: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    completed: false
  }
  

const [formPage, setFormPage] = useState( initialForm);


function setForm(e){
  setFormPage({...initialForm, firstName: e.target.firstName, lastName: e.target.lastName, email: e.target.email, password: e.target.password, completed: true })
}
function nextPage(){
  setFormPage(initialForm.index + 1)
}

// function setForm(e){
//   dispatch({type: "NAME", firstName: e.target.value})
//   dispatch({type: "LASTNAME"})
//   dispatch({type: "EMAIL" })
//   dispatch({type: "PASSWORD" })

// }
if(initialForm.completed === true)
  return <Name setForm={setForm}/>

  // return(
  //   <>
  //   <Name />
  //   <EmailPhone setForm={setForm}/>
  //   <Password setForm={setForm}/>
  //   <NextButton nextPage={nextPage}/>
  //   </>
  // )
}

export default App
