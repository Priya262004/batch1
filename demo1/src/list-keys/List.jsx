// import React from 'react'

// const List = () => {
//     let arr = [10 , 20 , 30 , 40]
//     console.log(arr);
//     let n = 0;
//     console.log(n);  
//   return (
//     <>
//     {
//         arr.map((ele) => {
//             console.log(`<li key =${n++}>${ele}</li>`);
            
//             return (
//                 <li key={n++}>{ele}</li>
//             )
//         })
//     }
//     </>
//   )
// }

// export default List

import React, { Fragment } from 'react'

const List = () => {
    let main = [
        {
            name : "sai charan",
            id : 1
        },
        {
            name : "priya",
            id : 2
        },
        {
            name : "krishna",
            id : 3
        },
    ]
  return (
    <>
    {
        main.map( (res) => {
            return(
                <Fragment key={res.id}>
                    <li>{res.name}</li>
                </Fragment>

            )
        }) 
    }
    </>
  )
}

export default List