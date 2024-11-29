import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Viewpage() {


    let [user,setUser]=useState([])

    let navigate=useNavigate()

    
    useEffect(()=>{
        async function fetch()
        {
            await axios.get("http://localhost:5000/user")
            .then((res)=>{
                let userdata=res.data;
                setUser(userdata)

            })
        }
        fetch()
    },[])




    function updateitem(id)
    {
        navigate(`/updatepage/${id}`)
    }

    function deleteitem(id)
    {
        axios.delete(`http://localhost:5000/user/${id}`)
        .then((res)=>{
            alert("Deleted User successfully")
        })
        .catch((res)=>{
            alert("Invalid data to delete")
        })

        setUser((ps)=> ps.filter((user)=> user.id!==id))
    }



  return (
    <div>

        {user.map((user)=>{
            return(
                <div >
                <h1> Name : {user.name} </h1>
           
                <h1> Phone : {user.phone} </h1>
               
                <h1> Email : {user.email} </h1>
              
                <button onClick={()=>{updateitem(user.id)}}>Update</button> &nbsp;
                <button onClick={()=>{deleteitem(user.id)}}>Delete</button>
                <br/>
                <br/>

                
                </div>
             
            )
        })}
      
    </div>
  )
}
