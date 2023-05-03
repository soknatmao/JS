let student1 ={
    firstname : "Jack",
    age : 18,
    favorite : "Eating",
    profile : "https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470__340.jpg"
}
let student2 ={
    firstname : "Jack",
    age : 18,
    favorite : "Eating",
    profile : "https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470__340.jpg"
}
let student3 ={
    firstname : "Jack",
    age : 18,
    favorite : "Eating",
    profile : "https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470__340.jpg"
}
let student4 ={
    firstname : "Jack",
    age : 18,
    favorite : "Eating",
    profile : "https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470__340.jpg"
}
let student5 ={
    firstname : "Jack",
    age : 18,
    favorite : "Eating",
    profile : "https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470__340.jpg"
}
let student6 ={
    firstname : "Jack",
    age : 18,
    favorite : "Eating",
    profile : "https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470__340.jpg"
}
let products = [ student1, student2, student3, student4, student5, student6]


let ROW = document.querySelector(".row")
console.log(ROW);
console.log(products)
products.map(product => ROW.innerHTML += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card" >
<img src="${product.profile}" class="card-img-top" alt="...">
<div class="card-body">
  <p class="card-text">${product.firstname}</p>
  <p class="card-text">${product.age}</p>
  <p class="card-text">${product.favorite}</p>
</div>
</div>

</div>


`)
let a = 50;
let b = 50;
if (a === b){
    console.log("Yes it equal both value and type")
}else{
    console.log("No, it is not equal; maybe type or value")
}
const x = 5, y = 3
// (x > 6) || (y < 5) // true
console.log((x > 6) && (y < 5))
// ----- Ternary Operator ----- 
// condition ? expression_1 : expression_2
let age = 17

let output = age >= 18 ? "You are legal to vote": "You are not legal to vote"
console.log(output)

// ------- use case for ternary operator -----

let loading = false
let noData = document.querySelector(".no-data")
let hasData = document.querySelector(".data")

let feedback = prompt("Do you want to see data?")
console.log(feedback)

feedback != "yes" ? noData.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card" aria-hidden="true">
        <img src="https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
        </p>
        <a class="btn btn-primary disabled placeholder col-6"></a>
        </div>
    </div>

` 
: 
products.map(product => hasData.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img src=${product.profile} class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${product.favorite}</p>
            </div>
        </div>
    </div>
`)




