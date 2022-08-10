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

        const modalTitle = document.getElementById("title-modal1");
        modalTitle.textContent = "Title: " + arrayObjetos[0].title;

        const modalTitle2 = document.getElementById("title-modal2");
        modalTitle2.textContent = "Title: " + arrayObjetos[1].title;

        const modalTitle3 = document.getElementById("title-modal3");
        modalTitle3.textContent = "Title: " + arrayObjetos[2].title;

        const modalTitle4 = document.getElementById("title-modal4");
        modalTitle4.textContent = "Title: " + arrayObjetos[3].title;

        const modalTitle5 = document.getElementById("title-modal5");
        modalTitle5.textContent = "Title: " + arrayObjetos[4].title;

        const modalTitle6 = document.getElementById("title-modal6");
        modalTitle6.textContent = "Title: " + arrayObjetos[5].title;

        const modalTitle7 = document.getElementById("title-modal7");
        modalTitle7.textContent = "Title: " + arrayObjetos[6].title;

        const modalTitle8 = document.getElementById("title-modal8");
        modalTitle8.textContent = "Title: " + arrayObjetos[7].title;

        const modalTitle9 = document.getElementById("title-modal9");
        modalTitle9.textContent = "Title: " + arrayObjetos[8].title;


        const modalBody = document.getElementById("body-modal1");
        modalBody.textContent = "Body: " + arrayObjetos[0].body;

        const modalBody2 = document.getElementById("body-modal2");
        modalBody2.textContent = "Body: " + arrayObjetos[1].body;

        const modalBody3 = document.getElementById("body-modal3");
        modalBody3.textContent = "Body: " + arrayObjetos[2].body;

        const modalBody4 = document.getElementById("body-modal4");
        modalBody4.textContent = "Body: " + arrayObjetos[3].body;

        const modalBody5 = document.getElementById("body-modal5");
        modalBody5.textContent = "Body: " + arrayObjetos[4].body;

        const modalBody6 = document.getElementById("body-modal6");
        modalBody6.textContent = "Body: " + arrayObjetos[5].body;

        const modalBody7 = document.getElementById("body-modal7");
        modalBody7.textContent = "Body: " + arrayObjetos[6].body;

        const modalBody8 = document.getElementById("body-modal8");
        modalBody8.textContent = "Body: " + arrayObjetos[7].body;

        const modalBody9 = document.getElementById("body-modal9");
        modalBody9.textContent = "Body: " + arrayObjetos[8].body;

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
