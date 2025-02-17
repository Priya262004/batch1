// import React, { useState } from 'react'

// const State = () => {
// let [name , setName] = useState("abhi")
// console.log(name);
// console.log(setName);


// let demo = () => {
//     setName("ramu")
// }


//   return (
//     <div>
//         <h1>{name}</h1>
//         <button onClick={demo}>click</button>
//     </div>
//   )
// }

// export default State

import React, { useState } from 'react'

const State = () => {
  let[name,setName]=useState('')
  let[password,setPassword]=useState('')
  let demo=(e)=>{
    e.preventDefault()
    console.log({name,password});
    name==="admin" && password==='12345'? window.open("http://www.pixaby.com"):console.log("error"); 
  }
  return (
   <>
   <form action =" "></form>
   <label htmlFor ="name">Name:</label>
   <input type ="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
   <br/>
   <label htmlFor ="password">Password:</label>
   <input type ="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
   <br/>
   <button onClick={demo}>Submit</button>

   </>
  )
}

export default State

// import { useState } from 'react'
// import video from "./1.mp4"
// const State = () =>  {

// }