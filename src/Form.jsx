import React, { useState } from 'react'
import axios from 'axios'

export default function Form() {

    let [name,setName]=useState("");
    let [phone,setPhone]=useState("");
    let [email,setEmail]=useState("");



    let payload={name,phone,email};




   function add(e)
   {
       e.preventDefault();
       axios.post('http://localhost:5000/user',payload)
       .then((res)=>{
        alert("User Added Successfully")
       })
       .catch((err)=>{
        alert("Invalid Data")
       })
   }



  return (
    <div>
        <fieldset>
            <legend>Add User Details</legend>
            <form action="" onSubmit={add}>
                <label>Name : </label><input type='text' onChange={(e)=>{setName(e.target.value)}}/>
                <br/>
                <label htmlFor="">Phone : </label><input type="text"  onChange={(e)=>{setPhone(e.target.value)}}/>
                <br />
                <label htmlFor="">Email : </label><input type="email"  onChange={(e)=>{setEmail(e.target.value)}}/>
                <br />
                <button >Submit</button>
            </form>
        </fieldset>
      
    </div>
  )
}
