 
 const btn = document.querySelector('.AddBtn');
  const Dialog = document.querySelector('.dialog')

  btn.addEventListener("click", () => {
     Dialog.showModal();
  });

  window.addEventListener('dblclick', () => {
    Dialog.close()
   });

const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
