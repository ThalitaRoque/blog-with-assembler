const btnCat = document.getElementById("btnCat");
const catContainer = document.getElementById("catContainer");

btnCat.addEventListener("click", getRandomCat);

function getRandomCat() {
  fetch("http://localhost:3000")
    .then((res) => res.json())
    .then((data) => {
      catContainer.innerHTML = `<img src=${data.file} alt="cat" />`;
    });
}
