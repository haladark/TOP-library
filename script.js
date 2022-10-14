
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

}

//function to loop myLibrary and display each book

function displayBooksOnPage() {
  const books = document.querySelector(".books");
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

//function to prompt Add Book Form





//main
addBookToLibrary("Book1","Author1","234 pages", "not read");
addBookToLibrary("Book2","Author2","345 pages", "not read");
addBookToLibrary("Book3","Author3","734 pages", "not read");
displayBooksOnPage();