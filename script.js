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

  fetch("http://localhost:3000/users")
    .then((array) => array.json())
    .then((arrayObjetos) => {
      // console.log(arrayObjetos[0].name);
      // console.log(arrayObjetos[0].email);

      // arrayObjetos.map((copy) => {
      //   console.log(`Nombre ${copy.name} y Email ${copy.email}`);
      // });

      const modalName = document.getElementById("name-modal1");
      modalName.textContent = "name: " + arrayObjetos[0].name;

      const modalName2 = document.getElementById("name-modal2");
      modalName2.textContent = "name: " + arrayObjetos[1].name;

      const modalName3 = document.getElementById("name-modal3");
      modalName3.textContent = "name: " + arrayObjetos[2].name;

      const modalName4 = document.getElementById("name-modal4");
      modalName4.textContent = "name: " + arrayObjetos[3].name;

      const modalName5 = document.getElementById("name-modal5");
      modalName5.textContent = "name: " + arrayObjetos[4].name;

      const modalName6 = document.getElementById("name-modal6");
      modalName6.textContent = "name: " + arrayObjetos[5].name;

      const modalName7 = document.getElementById("name-modal7");
      modalName7.textContent = "name: " + arrayObjetos[6].name;

      const modalName8 = document.getElementById("name-modal8");
      modalName8.textContent = "name: " + arrayObjetos[7].name;

      const modalName9 = document.getElementById("name-modal9");
      modalName9.textContent = "name: " + arrayObjetos[8].name;

      const modalEmail = document.getElementById("email-modal1");
      modalEmail.textContent = "email: " + arrayObjetos[0].email;

      const modalEmail2 = document.getElementById("email-modal2");
      modalEmail2.textContent = "email: " + arrayObjetos[1].email;

      const modalEmail3 = document.getElementById("email-modal3");
      modalEmail3.textContent = "email: " + arrayObjetos[2].email;

      const modalEmail4 = document.getElementById("email-modal4");
      modalEmail4.textContent = "email: " + arrayObjetos[3].email;

      const modalEmail5 = document.getElementById("email-modal5");
      modalEmail5.textContent = "email: " + arrayObjetos[4].email;

      const modalEmail6 = document.getElementById("email-modal6");
      modalEmail6.textContent = "email: " + arrayObjetos[5].email;

      const modalEmail7 = document.getElementById("email-modal7");
      modalEmail7.textContent = "email: " + arrayObjetos[6].email;

      const modalEmail8 = document.getElementById("email-modal8");
      modalEmail8.textContent = "email: " + arrayObjetos[7].email;

      const modalEmail9 = document.getElementById("email-modal9");
      modalEmail9.textContent = "email: " + arrayObjetos[8].email;
    });

  fetch("http://localhost:3000/comments")
    .then((array) => array.json())
    .then((arrayObjetos) => {
      // console.log(arrayObjetos[0].name);
      // console.log(arrayObjetos[0].email);

      const comentModal = document.getElementById("comment-modal1");
      comentModal.textContent = "modal: " + arrayObjetos[0].body;

      const comentModal2 = document.getElementById("comment-modal2");
      comentModal2.textContent = "modal: " + arrayObjetos[1].body;

      const comentModal3 = document.getElementById("comment-modal3");
      comentModal3.textContent = "modal: " + arrayObjetos[2].body;

      const comentModal4 = document.getElementById("comment-modal4");
      comentModal4.textContent = "modal: " + arrayObjetos[3].body;

      const comentModal5 = document.getElementById("comment-modal5");
      comentModal5.textContent = "modal: " + arrayObjetos[4].body;

      const comentModal6 = document.getElementById("comment-modal6");
      comentModal6.textContent = "modal: " + arrayObjetos[5].body;

      const comentModal7 = document.getElementById("comment-modal7");
      comentModal7.textContent = "modal: " + arrayObjetos[6].body;

      const comentModal8 = document.getElementById("comment-modal8");
      comentModal8.textContent = "modal: " + arrayObjetos[7].body;

      const comentModal9 = document.getElementById("comment-modal9");
      comentModal9.textContent = "modal: " + arrayObjetos[8].body;

console.log(arrayObjetos[0].body);
    
    });

    fetch("http://localhost:3000/comments")
    .then((array) => array.json())
    .then((arrayObjetos) => {
      

      const emailComentModal = document.getElementById("comment-email-modal1");
      emailComentModal.textContent = "email: " + arrayObjetos[0].email;

      const emailComentModal2 = document.getElementById("comment-email-modal2");
      emailComentModal2.textContent = "email: " + arrayObjetos[1].email;

      const emailComentModal3 = document.getElementById("comment-email-modal3");
      emailComentModal3.textContent = "email: " + arrayObjetos[2].email;

      const emailComentModal4 = document.getElementById("comment-email-modal4");
      emailComentModal4.textContent = "email: " + arrayObjetos[3].email;

      const emailComentModal5 = document.getElementById("comment-email-modal5");
      emailComentModal5.textContent = "email: " + arrayObjetos[4].email;

      const emailComentModal6 = document.getElementById("comment-email-modal6");
      emailComentModal6.textContent = "email: " + arrayObjetos[5].email;

      const emailComentModal7 = document.getElementById("comment-email-modal7");
      emailComentModal7.textContent = "email: " + arrayObjetos[6].email;

      const emailComentModal8 = document.getElementById("comment-email-modal8");
      emailComentModal8.textContent = "email: " + arrayObjetos[7].email;

      const emailComentModal9 = document.getElementById("comment-email-modal9");
      emailComentModal9.textContent = "email: " + arrayObjetos[8].email;


console.log(arrayObjetos[0].email);
      // arrayObjetos.map((copy) => {
      //   console.log("Body" + `${copy.body}`);
        
      // });
    });
});

// fetch("http://localhost:3000/comments")
// .then((array) => array.json())
// .then((arrayObjetos) => {
//   // console.log(arrayObjetos[0].name);
//   // console.log(arrayObjetos[0].email);

//   arrayObjetos.map((copy) => {
//     console.log("Body" + copy.body);

//   });
// });

/* PRUEBA */

const btnCat = document.getElementById("btnCat");
const catContainer = document.getElementById("catContainer");

btnCat.addEventListener("click", getRandomCat);

function getRandomCat() {
  fetch("http://localhost:3000/posts")
    .then((array) => array.json())
    .then((arrayObjetos) => {
      // console.log(arrayObjetos[5].body);
      catContainer.textContent = arrayObjetos[5].title;
    });
}
