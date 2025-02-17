// import React from 'react'

// const Ref = () => {
//     let demo = document.getElementById("demo")
//     console.log(demo);
//     demo.style.backgroundColor = "red"
    
//   return (
//     <div>Ref</div>
//   )
// }

// export default Ref

// import React from 'react'
// import { useRef } from 'react'

// const Ref = () => {
//     let demo = useRef()
//     console.log(demo);
//     // console.log(demo.current);
//     demo.current.style.backgroundColor = "yellow"
    
    
//   return (
//     <div>
//         <h1 ref={demo}>hello</h1>
//     </div>
//   )
// }

// export default Ref

// import React from 'react'


// const Ref = () => {
//   return (
//     <div>Ref</div>
//   )
// }

// export default Ref


import React from 'react'
import { useRef } from 'react'

const Ref = () => {
  let name = useRef('')
  let password = useRef('')
  let eventHandler = (e) => {
    e.preventDefault()
    console.log({name : name.current.value});
    console.log({password : password.current.value}); 
  }

  return (
    <>
    <form action="">
      name : <input ref={name} type="text" name="name" id="name"/>
      <br />
      password: <input ref={password} type="password" name="password"
      id="password" />
      <br />
      <button onClick={eventHandler} submit ></button>
    </form>
    </>
  )
}

export default Ref