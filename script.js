const btnCat = document.getElementById("btnCat");
const catContainer = document.getElementById("catContainer");

btnCat.addEventListener("click", getRandomCat);

function getRandomCat() {
  fetch("http://localhost:3000/posts")
    .then((array) => array.json())
    .then((arrayObjetos) => {
      console.log(arrayObjetos[5].body);
      catContainer.textContent = arrayObjetos[5].title;
    });
}
