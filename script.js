 
  const AddtBtn = document.querySelector('.AddBtn');
  const Dialog = document.querySelector('.dialog')
  const closeBtn = document.querySelector('.close');
  const readBtn = document.querySelector('.read-green');
  const notReadBtn = document.querySelector('notRead-red');
  const submitBtn = document.querySelector('.form-btn');
  const BookTitle = document.querySelector('#title');
  const BookAuthor = document.querySelector('#author');
  const BookPub = document.querySelector('#published');
  const BookPages = document.querySelector('#pages');
  const BookRead = document.querySelector('#read');
  const form = document.querySelector('#form');
  const cardGrid = document.querySelector('.book-grid');
  AddtBtn.addEventListener("click", () => {
     Dialog.showModal();
  });

  closeBtn.addEventListener('click', () => {
    Dialog.close()
   }); 

   window.addEventListener('click', (e)=> {
    if (e.target.classList.contains("read-green")) {
      unRead(e.target);
    }
    if(e.target.classList.contains("delete")){
      DeleteCard(e.target);
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
   

  function DeleteCard(element) {
    const parentCard = element.closest('.book-card');
    if (parentCard) {
      const divRemove = document.getElementById(parentCard.id);
      const indexToRemove = parseInt(divRemove.id, 10); // Convert id to a number
      myLibrary.splice(indexToRemove, 1);
      cardGrid.removeChild(divRemove);
      updateId();
    }
  }

  function updateId(){
    const allBookCards = document.querySelectorAll('.book-card');
    for(let i = 0; i < allBookCards.length; i++){
        allBookCards[i].id = i;
    }
  }

 const myLibrary = [];

 class Book{
  constructor (title, author, published ,pages, read){
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
    this.read = read;
  }

  addBookToLibrary(){
    const title = BookTitle.value;
    const author = BookAuthor.value;
    const published = BookPub.value;
    const pages = BookPages.value;
    const read = BookRead.checked;
     myLibrary.push(new Book(title, author, published ,pages, read));
  }

CreateCard(){
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('book-card');
  cardDiv.setAttribute('id', myLibrary.length-1);
  const titleH3 = document.createElement('h3');
  titleH3.textContent = myLibrary[myLibrary.length - 1].title;
  const authorDate = document.createElement('p');
  authorDate.textContent = `${myLibrary[myLibrary.length - 1].author} | ${myLibrary[myLibrary.length - 1].published}`;
  const pagesP = document.createElement('p');
  pagesP.textContent = `${myLibrary[myLibrary.length - 1].pages} pages`;
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('card-buttons');
  const ReadCheck = document.createElement('button');
   if(myLibrary[myLibrary.length - 1].read == true){
      ReadCheck.classList.add('read-green');
      ReadCheck.textContent = 'Read'
   } else{
    ReadCheck.classList.add('read-green');
    ReadCheck.classList.add('notRead-red');
    ReadCheck.textContent = 'Not read';
   }
   const deleteBtn = document.createElement('button');
   deleteBtn.classList.add('delete');
   deleteBtn.textContent = 'Delete';
   cardGrid.appendChild(cardDiv);
   cardDiv.appendChild(titleH3);
   cardDiv.appendChild(authorDate);
   cardDiv.appendChild(pagesP);
   cardDiv.appendChild(buttonDiv);
   buttonDiv.appendChild(ReadCheck);
   buttonDiv.appendChild(deleteBtn);
 }
 } 
    const newBook = new Book({
      
    });

 form.addEventListener('submit', () =>{
  event.preventDefault();
  newBook.addBookToLibrary();
  newBook.CreateCard();
  form.reset();
 });
 