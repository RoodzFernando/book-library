let bookCard = document.getElementById('book-card');


let myLibrary = [];

function Book(author, title, pages, read = false) {
    this.id = Math.floor(Math.random() * 100);
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    myLibrary.push(new Book(author, title, pages, read));
    console.log(myLibrary);
}

function render() {
    bookCard.innerHTML = "";
    for (let book of myLibrary) {
        const bookItem = document.createTextNode(`Id: ${book.id} Author: ${book.author} Title: ${book.title} Pages: ${book.pages} Read: ${book.read}`)
        let bookElem = document.createElement('li');
        bookElem.setAttribute("id", `${book.id}`);
        let button = document.createElement('button');
        let toggleBtn = document.createElement('button');
        button.setAttribute('onclick', 'removeBook(this)')
        toggleBtn.setAttribute('onclick', 'toggleReadStatus(this)')
        button.textContent = " x";
        toggleBtn.textContent = "Change Read Status"
        bookElem.appendChild(bookItem);
        bookElem.appendChild(button);
        bookElem.appendChild(toggleBtn)
        bookCard.appendChild(bookElem);
    }
}


// let test = addBookToLibrary('Mike', 'Cooking book', 55);
// let test1 = addBookToLibrary('Roodz', 'notebook', 15, true);
// let test2 = addBookToLibrary('Tolkien', 'The Hobbit', 158, false);
// let test3 = addBookToLibrary('Ultra', 'The Hobbit', 158, false);
// console.log(myLibrary);
// render();


// bookCard.innerHTML = render();
// save new book button

let saveBtn = document.getElementById("save");

function addBook(e) {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value == 'yes' ? true : false;
    e.preventDefault();
    addBookToLibrary(author, title, pages, read);
    // myLibrary = [];
    render();
}


function removeBook(id) {
    // console.log(id.parentElement.id);
    let test = myLibrary.find(element => element.id == id.parentElement.id);
    // console.log(myLibrary.indexOf(test));
    myLibrary.splice(myLibrary.indexOf(test), 1);
    render();
}

function toggleReadStatus(id){
    let test = myLibrary.find(element => element.id == id.parentElement.id);
    let readStatus = myLibrary[myLibrary.indexOf(test)].read;
    // console.log(myLibrary[myLibrary.indexOf(test)])
    if(myLibrary[myLibrary.indexOf(test)].read == false)
    myLibrary[myLibrary.indexOf(test)].read = true;
    else{
        myLibrary[myLibrary.indexOf(test)].read = false;
    }
    render();
}

saveBtn.addEventListener('submit', addBook);




//Add toggle button to change status to true or false
// onclick find the book, set status to true if false ..
