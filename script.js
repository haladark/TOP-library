
//array to store books information as objects
let myLibrary = [];

//Book objects constructor function
function Book(title,author,pages,read){
  this.Title = title,
  this.Author = author,
  this.Pages = pages,
  this.Read = read;

}

//Take user input and store the new book object in myLibrary then display myLibrary
function addBookToLibrary(title, author,pages,read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooksOnPage();
}
//function to loop myLibrary and display each book

function displayBooksOnPage() {
  //remove previous divs on page
  const removedBooks = document.querySelector('.books');
  removedBooks.remove();

  const container = document.querySelector('.container');
  let books = document.createElement("div");
  books.classList.add("books");
  container.appendChild(books);

  books = document.querySelector(".books");
  myLibrary.forEach((myLibrary,idx) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);

    const info = document.createElement("div");
    info.classList.add("info");
    card.appendChild(info);
    const actions = document.createElement("div");
    actions.classList.add("actions");
    card.appendChild(actions);

    for (let key in myLibrary) { // use for...in for iterating over an object
      const para = document.createElement("p");
      para.textContent = (`${key}: ${myLibrary[key]}`);
      info.appendChild(para); 
    }



    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete"; 
    deleteBtn.dataset.index = idx;
    actions.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (e)=>{
      const cardIdx = parseInt(e.target.dataset.index);
      deleteCard(cardIdx);
        });


    const markbook = document.createElement('div');
    markbook.classList.add('mark-as-read');
    markbook.textContent = 'Mark as Read';
    actions.appendChild(markbook);

    const readBtn = document.createElement("button");
    readBtn.classList.add('read-btn','material-icons-outlined');
    readBtn.textContent = 'done'; 
    readBtn.dataset.index = idx;
    markbook.appendChild(readBtn);
    readBtn.addEventListener('click', (e)=>{
      const cardIdx = parseInt(e.target.dataset.index);
      toggleRead(cardIdx,readBtn);
        });
  })
}

  const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('click', getFormData);
  const resetBtn= document.querySelector('.reset-btn')
    resetBtn.addEventListener('click', resetForm);
  const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click',closeForm);
  const addBookBtn = document.querySelector('.add-book-btn');
    addBookBtn.addEventListener('click', revealForm);

  function getFormData () {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    if ((title=='')||(author=='')||(pages=='')||(read=='')){
        alert('enter all fields');
        return;
    } 
    addBookToLibrary(title,author,pages,read);
    resetForm();
    closeForm();
  } 
  function revealForm(){
    document.getElementById('add-book-form').style.display='flex';
  }
  function resetForm(){
    document.getElementById('add-book').reset();
  }
  function closeForm(){ 
    resetForm();
    document.getElementById('add-book-form').style.display='none';
  }

  //Remove book from library
  function deleteCard(targetCard){
    myLibrary.splice(targetCard,1);
    displayBooksOnPage();
  }
  function toggleRead(idx,btn){
    //only change color at this point. Problem: when deleting any card all read-btn back to default not-read status
    btn.classList.toggle('read');
    console.log('toggle');

  }



