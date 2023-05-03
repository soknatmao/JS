let firstname = "Manith"
let lastname = "Un"
let favorite = "Banana"
let selfIntroduction = `Hi, greeting from Cambodia. Im ${firstname} ${lastname} my favorite is ${favorite}`
console.log(selfIntroduction)

let myapple = '50'
let numofapple = 90
console.log(typeof{myapple})
let result = myapple + numofapple
console.log("____total____" , result)
let HEADER = `
<h1> HI THERE </h1>
<h2> HELLLO </h>

`
// document.querySelector('#heading').innerHTML = HEADER


let student = {
    fullname : "Alex",
    age : 20,
    profile : "https://cdn.pixabay.com/photo/2023/04/08/15/06/portrait-7909587__340.jpg",
    favorite : "Gaming"
}
document.querySelector(".row").innerHTML = `
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card" >
            <img src=${student.profile} class="card-img-top" alt="...">
            <div class="card-body" >
              <p class="card-text">${student.fullname}  </div>
              <p class="card-text">${student.age}  </div>
              <p class="card-text">${student.favorite}  </div>
          </div>

`