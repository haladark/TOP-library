
//array to store books information
let myLibrary = [];

//Book objects constructor function
function Book(title,author,pages,read){
  this.Title = title,
  this.Author = author,
  this.Pages = pages,
  this.Read = read;

}

//function to take user input and store the new book objects in myLibrary
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
  myLibrary.forEach(myLibrary => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
    for (let key in myLibrary) { // use for...in for iterating over an object
      //console.log(`${key}: ${myLibrary[key]}`);
      const para = document.createElement("p");
      para.textContent = (`${key}: ${myLibrary[key]}`);
      card.appendChild(para); 
    }
  })

}

//function to submit New Book Form
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.addEventListener('click', getFormData);

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
    document.getElementById('add-book').reset(); 
  } 

  const resetBtn= document.querySelector('.reset-btn')
  resetBtn.addEventListener('click', formReset);

  function formReset(){
    document.getElementById('add-book').reset();
  }

//main
