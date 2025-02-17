// let obj = {
//     name : "abhi" ,
//     id : 1,
//     designation : "developer"
// }
// console.log(obj);

// let obj1 = JSON.stringify(obj)
// console.log(obj1);

// let obj2 = JSON.parse(obj1)
// console.log(obj2);



// window.fetch("data.json")
// .then((data) => data.json())
// .then((res) => {
//     console.log(res);
//     // console.log(res[0]);
//     // console.log(res[0].name);
//     // map()
//     res.map((x) => {
//         console.log(x);
//         console.log(x.name);
//         console.log(x.id);

//     document.body.innerHTML += `<h2>${x.name}</h2>`
//     document.body.innerHTML += `<h2>${x.id}</h2>`
//     document.body.innerHTML += `<h2>${x.designation}</h2>`        
//     }) 
    
//     .catch(() => console.log("error occured"))
    
// })


let btn
btn.onClick = () => {
    let search = document.getElementById("search").value
    console.log(search);
    let page = 30
    window.fetch(`https://pixabay.com/api/?key=48495018-3cdb9aff34c2c1d4aaa764a9a&q=${search}&image_type=photo&pretty=true&per_page=${page}`)
    .then((data) => data.json())
    .then((res) => {
        console.log(res);
        console.log(res.hits);
    })
        // map()
        res.hits.map((x) => {
            console.log(x);
        let demo = document.getElementById("demo")
        console.log(demo);
        demo.innerHTML += `<img src=${x.previewURL}/> `
        
            
        })

        
        

    }