const btnCat = document.getElementById("btnCat");
const catContainer = document.getElementById("catContainer");
// const posts = document.getElementsByClassName("list-group-item");

//  for(i=0; i<posts.length; i++){
//   posts[i].addEventListener("click", ()=>{
    
//   })
//  }





window.addEventListener("load", () => {
  fetch("http://localhost:3000/posts")
    .then((array) => array.json())
    .then((arrayObjetos) => {
      const listGroup = document.querySelector(".list-group");
      listGroup.classList.remove("d-none");

      for (i = 0; i < 9; i++) {
        const titles = document.getElementsByClassName("list-title");
        titles[i].textContent = "Title: " + arrayObjetos[i].title;

        const modalTitle = document.getElementById("title-modal");
        modalTitle.textContent = "Title: " + arrayObjetos[i].title;
      }
    });
});

btnCat.addEventListener("click", getRandomCat);

function getRandomCat() {
  fetch("http://localhost:3000/posts")
    .then((array) => array.json())
    .then((arrayObjetos) => {
      console.log(arrayObjetos[5].body);
      catContainer.textContent = arrayObjetos[5].title;
    });
}
