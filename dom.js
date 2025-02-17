// console.log(window);
// console.log(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);
// document.title = "amazon"
// console.log(document.body);

// let img = document.images
// console.log(img);
// console.log(img[0]);
// console.log(img[1]);
// console.log(img[2]);
// for(let i=0; i<=img.length; i++)
// {
//     console.log(img[i]);
//     img[i].style.height = "200px"
//     img[i].style.width = "200px"
//     img[i].style.borderRadius = "100%"
//     img[i].alt = "image"
// }



// in-direct access in dom(methods in dom)
// 1) document.getElementById("value")
// 2) document.getElementByClassName("value")
// 3) document.getElementsByTagName("value")
// 4) documet.getElementsByName("value")
// 5) document.querySelector("value")
// 6) document.querySelectorAll("value")


// let a = document.getElementById("demo")
// console.log(a);
// console.log(a.textContent);
// a.textContent = "batch 5"
// a.style.backgroundColor = "grey"
// a.style.textAlign = "center"



// let a1 = document.getElementsByClassName("demo1")
// console.log(a1);
// console.log(a1[0]);
// console.log(a1[0].textContent);
// a1[0].textContent = "hello-world"
// a1[0].style.color ="red"
// console.log(a1[1]);

// let b = document.getElementsByTagName("ol")
// console.log(b);
// console.log(b[1]);
// b[1].style.backgroundColor = "crimson"

// let c = document.getElementsByName("demo2")
// console.log(c);
// console.log(c[1]);

// document.querySelector
// -->value should be passes using css symbol
// -->will return reference of first element

// let d = document.querySelector("#demo")
// console.log(d);

// let f = document.querySelector(".demo1")
// console.log(f);

// document.querySelectorAll
// -->value should be passes using css symbol
// --> will return reference of node-list

// let e = document.querySelectorAll("#demo")
// console.log(e);
// console.log(e[0]);

// let g = document.querySelectorAll(".demo1")
// console.log(g);

// event in dom
// -->it is an action performed by end-user on a web-page.

// -->types:-

// 1) keyboard-event
// key-up
// key-down
// key-press
// 2) mouse-event 
// onmouseover
// onmouseleave
// dbclick
// 3) form-event
// input
// focus
// blur
// 4) pointer-event
// click-event


// function event1()
// {
//     console.log("hello-world")
// }


let a = document.createElement("h1")
console.log(a) // <h1></h1>
a.textContent = "hello-world" //<h1></h1>

document.body.appendChild(a)
a.style.backgroundColor = "violet"

let div = document.getElementById("demo")
console.log(div);
div.style.border = "5px solid"

// create a ol-tag
let ol = document.createElement("ol")
console.log(ol);

// appendnol-tag to div-tag
div.appendChild(ol)


// create li-tag
let li1 = document.createElement("li")
console.log(li1);
li1.textContent = "react"

// append li-tag to ol-tag
ol.appendChild(li1)

let table = document.createElement("table")
console.log(table);
table.setAttribute("border" , "2px solid black")

//append table to parent
document.body.appendChild(table)

//create tr tag
let tr1 = document.createElement("tr")
console.log(tr1);

//append tr to table-tag
table.appendChild(tr1)

//create td-tag
let td1 = document.createElement("td")
console.log(td1);
td1.textContent = "html"
tr1.appendChild(td1)

let td2 = document.createElement("td")
console.log(td1);
td2.textContent = "html"
tr1.appendChild(td2)

let td3 = document.createElement("td")
console.log(td1);
td3.textContent = "html"
tr1.appendChild(td3)