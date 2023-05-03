

// fetch api: fetch{}
let row = document.querySelector(".row")
let productAPI = `https://api.escuelajs.co/api/v1/products`
function getAllproducts (){
    fetch (productAPI)
    .then (resp => resp.json())
    .then(response => console.log(response.map(response => row.innerHTML+=`
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card" >
        <img src= ${response.images[0]} class="card-img-top" alt="...">
        <div class="card-body">
                 <p>  ${response.title}</p>
          
        </div>
      </div>

</div>
   
    `)))
}
// getAllproducts()
let basePath = `https://image.tmdb.org/t/p/w440_and_h660_face/`
let getAllmovies =  `https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`
function allMovies (){
    fetch (getAllmovies)
    .then (resp => resp.json()) 
    .then (res => console.log(res.results.map(res => row.innerHTML +=`
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card" >
        <img src= ${basePath+res.poster_path} class="card-img-top" alt="...">
        <div class="card-body">
                 <p>  ${res.title}</p>
          
        </div>
      </div>

</div>
    `)))


}
allMovies()