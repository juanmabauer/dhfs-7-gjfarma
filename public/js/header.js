window.onload = function () {
  document.querySelector('.searchTerm').addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      search();
    }
  });
  var searchBar = document.querySelector('.search-bar');


  document.addEventListener('click', function (event) {
    var isClickInside = searchBar.contains(event.target);

    if (!isClickInside) {
      closeSearchBar();
    }
  });
};

function burgerMenuClick() {
  var x = document.getElementById("burger-menu-items");
  if (x.classList.contains("open")) {
    x.classList.remove("open");
  } else {
    x.classList.add("open");
  }
}
function burgerMenuClick() {
  var x = document.getElementById("burger-menu-items");
  if (x.classList.contains("open")) {
    x.classList.remove("open");
  } else {
    x.classList.add("open");
  }
}
function search() {
  let searchResults = document.querySelector('.search-results');
  closeSearchBar();
  let searchString = document.querySelector('.searchTerm').value;
  if (searchString) {
    fetch('/api/products/search?searchString=' + searchString)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          document.querySelector('.searchTerm').classList.add("searchOpen");
          document.querySelector('.searchButton').classList.add("searchOpen");
          data.forEach(productHTML => {
            searchResults.innerHTML += productHTML;
          })
        }
      });
  }
}

function closeSearchBar() {
  let searchResults = document.querySelector('.search-results');
  searchResults.innerHTML = '';
  document.querySelector('.searchTerm').classList.remove("searchOpen");
  document.querySelector('.searchButton').classList.remove("searchOpen");
}

function initMap() {
  //Declara un [] de objetos como los de abajo
  const pickUpPoints = [
    {lat: -34.5511783, lng: -58.4526966},
    {lat: -34.7440431, lng: -58.3245274},
    {lat: -34.8908592, lng: -57.9823208},
    {lat: -34.7438134, lng: -58.3900559},
    {lat: -34.4991616, lng: -58.590468},
  ]
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: pickUpPoints[0],
  })
  for(let i= 0; i < pickUpPoints.length; i++){
    const marker = new google.maps.Marker({
      position: pickUpPoints[i],
      map: map,
    })
  }
  
 ;
}