// function main(m,n)
// {
//     setTimeout(() => {
//         for(let i=m; i<=n; i++)
//         {
//             console.log(i);
//         }
//     } , 5000)
// }
// main(1, "10a")

// function sample()
// {
//     console.log("no's printed")
// }
// sample()
// window.setTimeout(() => {
//     console.log("iam settimeout")
// }, 5000);

// window.setInterval(() => {
//     console.log("iam setInterval")
// }, 3000);

// Promise
// it is used to lookafter the async function
// it is an Object
// it has three phases
// 1.pending phases: either promise will bw resolve or reject 
// 2.resolve/fulfill phases : when async function is successfull-then method it is higher order it will accept one callback function.then(cbf)
// 3.reject phase: when async function is not successfull.catch(cbf)
// syntax:
// new Promise(() => {
// -----async fun-----


// })
// .then(cbf)
// .catch(cbf)

// let online = window.navigator.online
// function main(m,n)
// {
//     new Promise((resolve , rejecct) => {
//         setTimeout(() => {
//             if(isNaN(m) || isNaN(n))
//             {
//                return resolve()
//             }
//             for(let i=m; i<=n; i++)
//             {
//                 console.log(i);
//             }
//             return resolve()
//         } , 5000)
//     })
//     .then(() => console.log("promise is resolved"))
//     .catch(() => console.log("error-occured"))
// }
// main(1 , 10)
// function main(m,n)
// {
//     setTimeout(() => {
//         for(let i=m; i<=n; i++)
//         {
//             console.log(i);
//         }
//     } , 5000)
// }
// main(1, 10)

// function sample()
// {
//     console.log("no's printed")
// }
// sample()

// DOM document object model
// BOM browser object model
// window ---- root element
// screen navigator navigation history storage fetch dom
// dom-->root element ---document
// root element --- document-->html
// html-->head and body
// head--> meta title
// body--> all tags
// dom: it is an object
// it is an api provided by window 
// root element document
// it is having life-span page-reloads
// it is used to create,delete and update an element and it is used to provide a style for an element.