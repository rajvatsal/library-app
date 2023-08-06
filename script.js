let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read? "read": "not read yet";
}
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
}

function addToLibrary(newBook) {
    myLibrary.push(newBook);
    readLibrary(newBook)
}

function changeCardColor(read, card) {
        if(read === "read") 
            card.classList.add('read');
        else 
            card.classList.add('not-read');
}

function readLibrary(book) {
        let card = document.createElement('DIV');
        let title = document.createElement('H2');
        let author = document.createElement('H4');
        let pages = document.createElement('H4');
        let read = document.createElement('H4');
        let by =document.createElement('H4');
        let remove = document.createElement('INPUT');
        remove.type = 'image';
        remove.src = "imgs/cross-icons-collection/cancel.png";
        remove.classList.add('remove');
        title.textContent = book.title;
        by.textContent = `by`;
        author.textContent = `${book.author}`;
        author.classList.add('author');
        pages.textContent = `${book.pages} pages`;
        pages.classList.add('pages');
        changeCardColor(book.read, card);
        card.appendChild(title);
        card.appendChild(by);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(remove);
        card.style.position = 'relative';
        card.classList.add('card');
        card.addEventListener('mousedown', (e) => {
            if(e.target.classList.contains('remove')) e.currentTarget.remove();
        });
        document.querySelector('main').prepend(card);
}

const addBook = document.querySelector('main button:not(.remove)');
const form = document.querySelector('form');
const submitButton = document.querySelector('form button');
const body = document.querySelector('body');
const dialog = document.querySelector('dialog');

addBook.addEventListener('click', (e) => {
    dialog.showModal();
})

submitButton.addEventListener('click', (e) => {
    let form = document.querySelector('form');
    let title = document.getElementById('book_title');
    let author = document.getElementById('book_author');
    let pages = document.getElementById('book_pages');
    let read = document.getElementById('book_read').checked;
    if(!title.value || !author.value || !pages.value) return
    else e.preventDefault();
    let book = new Book(title.value, author.value, pages.value, read);
    addToLibrary(book);
    form.reset();
})

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 255, true);
addToLibrary(theHobbit);
let anaAlex = new Book("Anabasis of Alexander", "Xenophon", 238, false);
addToLibrary(anaAlex);
let harry = new Book("Harry Potter and Order of the Phoenix", "J.K. Rowling", 766, true);
addToLibrary(harry);