/*Created by Halla Idris as Project Library of The Oden Project curriculum*/

//array to store books information as objects
let myLibrary = [];

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', getFormData);
const resetBtn= document.querySelector('.reset-btn')
resetBtn.addEventListener('click', resetForm);
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click',closeForm);
const addBookBtn = document.querySelector('.add-book-btn');
addBookBtn.addEventListener('click', revealForm);

//Book objects constructor function
function Book(title,author,pages,read){
  this.Title = title,
  this.Author = author,
  this.Pages = pages,
  this.Read = read;

}

function addBookToLibrary(title, author,pages,read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooksOnPage();
}

function displayBooksOnPage() {

  const removedBooks = document.querySelector('.books');
  removedBooks.remove();

  const container = document.querySelector('.container');
  let books = document.createElement("div");
  books.classList.add("books");
  container.appendChild(books);

  books = document.querySelector(".books");
  myLibrary.forEach((myLibrarybooks,idx) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);

    const info = document.createElement("div");
    info.classList.add("info");
    card.appendChild(info);
    const actions = document.createElement("div");
    actions.classList.add("actions");
    card.appendChild(actions);

    for (let key in myLibrarybooks) { 
      const para = document.createElement("p");
      para.textContent = (`${key}: ${myLibrarybooks[key]}`);
      info.appendChild(para);
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete"; 
    deleteBtn.dataset.index = idx;
    actions.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (e)=>{
      const cardIdx = parseInt(e.target.dataset.index);
      deleteBook(cardIdx);
        });

    const markbook = document.createElement('div');
    markbook.classList.add('mark-as-read');
    markbook.textContent = 'Mark as Read';
    actions.appendChild(markbook);

    const readBtn = document.createElement("button");
    readBtn.classList.add('read-btn','material-icons-outlined');
    readBtn.textContent = 'done'; 
    readBtn.dataset.index = idx;
    if ( (myLibrary[idx].Read) == 'Yes'){
      readBtn.classList.add('read');
    } else {
      readBtn.classList.remove('read'); 
    }
    markbook.appendChild(readBtn);
    readBtn.addEventListener('click', (e)=>{
      const cardIdx = parseInt(e.target.dataset.index);
      toggleRead(cardIdx,readBtn);
        });
  })
}

function getFormData () {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;

  let readIdx = document.getElementById('read').selectedIndex;
  let readOptions = document.getElementById('read').options;
  let read = readOptions[readIdx].text;
    if ((title=='')||(author=='')||(pages=='')||(read=='')){
      alert('Please enter correct information in all fields');
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

function deleteBook(targetCard){
    myLibrary.splice(targetCard,1);
    displayBooksOnPage();
}

function toggleRead(idx,btn){
  let toggleRead = myLibrary[idx].Read;
  if (toggleRead == 'No'){
    myLibrary[idx].Read = 'Yes';
    } else {
      myLibrary[idx].Read = 'No';
    }
  btn.classList.toggle('read');
  displayBooksOnPage();
}

