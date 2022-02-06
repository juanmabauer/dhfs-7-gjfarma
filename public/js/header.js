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