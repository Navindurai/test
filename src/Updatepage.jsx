import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

export default function Form() {

    let [name,setName]=useState("");
    let [phone,setPhone]=useState("");
    let [email,setEmail]=useState("");

    let params=useParams();


    let navigate=useNavigate();

    
    useEffect(()=>{
        async function fetch()
        {
            await axios.get(`http://localhost:5000/user/${params.id}`)
            .then((res)=>{
                let userdata=res.data;
                 setName(userdata.name)
                 setPhone(userdata.phone)
                 setEmail(userdata.email)

            })
        }
        fetch()
    },[])





    let payload={name,phone,email};




   function update(e)
   {
       e.preventDefault();
       axios.put(`http://localhost:5000/user/${params.id}`,payload)
       .then((res)=>{
        alert("Updated User Successfully")
        navigate('/viewpage')
       })
       .catch((err)=>{
        alert("Invalid Data")
       })

      


   }



  return (
    <div>
        <fieldset>
            <legend>Add User Details</legend>
            <form action="" onSubmit={update}>
                <label>Name : </label><input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <br/>
                <label htmlFor="">Phone : </label><input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <br />
                <label htmlFor="">Email : </label><input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <br />
                <button onClick={update} >Update</button>
            </form>
        </fieldset>
      
    </div>
  )
}
