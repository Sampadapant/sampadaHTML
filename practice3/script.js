 //we are selecting elemnts

//with css selector
//we can select the element by tagname, class name, id, attribute

//tagname

let a = document.querySelector('h1')
console.log(a)

//class name
let b = document.querySelector('.two')
console.log(b)

//id
let c = document.querySelector('#one')
console.log(c)

//attribute
//tagName[attribute = "value"]
let d = document.querySelector('h1[name = "sam"]')
console.log(d)

let e = document.querySelector('h2')
console.log(e)

let f = document.querySelector('.advance')
console.log(f)

let g = document.querySelector('#anj1')
console.log(g)

let h = document.querySelector('h2[name = "anze"]')
console.log(h)

a.addEventListener('click',function(){
    a.style.color = "blue"
    a.style.backgroundColor = "yellow"
    a.textContent = "Sanjay"
}
)
e.addEventListener('mouseover', function(){
    e.style.color = "pink"
    e.style.backgroundColor = "blue"
    e.textContent= "my friend"
    
}
)
