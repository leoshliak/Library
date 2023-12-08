 
 const SubmitBtn = document.querySelector('.AddBtn');
  const Dialog = document.querySelector('.dialog')
  const closeBtn = document.querySelector('.close');
  const readBtn = document.querySelector('.read-green');
  const notReadBtn = document.querySelector('notRead-red');
  
  SubmitBtn.addEventListener("click", () => {
     Dialog.showModal();
  });

  closeBtn.addEventListener('click', () => {
    Dialog.close()
   }); 

   window.addEventListener('click', (e)=> {
    if (e.target.classList.contains("read-green")) {
      unRead(e.target);
    }
  });
   
  function unRead(btn) {
    if (btn.classList.contains("notRead-red")) {
      btn.classList.remove("notRead-red");
      btn.textContent = 'Read';
    } else {
      btn.classList.add("notRead-red");
      btn.textContent = 'Not read';
    };
  };

const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}