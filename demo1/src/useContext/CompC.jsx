// import React from 'react'
// import {user , id} from './CompA.jsx'

// const CompC = () => {
//   return (
//     <div>
//         <user.Consumer>
//             {
//                 () =>  {
//                     return(
//                         <>
//                         <id.Consumer>
//                             {
//                                 (num) => {
//                                     return(
//                                         <h1>my name is {"priya"} and id is {num}</h1>
//                                     )
//                                 }
//                             }
//                         </id.Consumer>
//                         </>
//                     )
//                 }
//             }
//         </user.Consumer>
//     </div>
//   )
// }

// export default CompC

import React, { useContext } from 'react'
import { userName , id } from './CompA'

const CompC = () => {
    let user = useContext(userName)
    let number = useContext(id)
  return (
    <div>
        <h1>{user}</h1>
        <h1>{number}</h1>
        <CompC/>
    </div>
  )
}

export default CompC