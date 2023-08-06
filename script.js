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
    myLibrary.push(...newBook);
    readLibrary(newBook)
}

function readLibrary(newBook) {
    for(let book of newBook) {
        let card = document.createElement('DIV');
        let title = document.createElement('H2');
        let author = document.createElement('H4');
        let pages = document.createElement('H4');
        let read = document.createElement('DIV');
        let remove = document.createElement('BUTTON');
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read;
        remove.textContent = 'Remove';
        remove.classList.add('remove');
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(remove);
        card.classList.add('card');
        card.addEventListener('mousedown', (e) => {
            if(e.target.classList.contains('remove')) e.currentTarget.remove();
        });
        document.querySelector('main').prepend(card);
    }
}


const addBook = document.querySelector('main button:not(.remove)');
const form = document.querySelector('form');
const mask = document.querySelector('.mask');
const submitButton = document.querySelector('form button');
const body = document.querySelector('body');
addBook.addEventListener('click', (e) => {
    form.style.display = 'grid';
    mask.style.display = 'block';
    body.style.setProperty('overflow', 'hidden');
})
mask.addEventListener('click', (e) => {
    form.style.display = 'none';
    mask.style.display = 'none';
    body.style.removeProperty('overflow', 'hidden');
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
    addToLibrary([book]);
    form.reset();
})