let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = this.read? "read": "not read yet"
}
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
}

function addToLibrary(newBook) {
    myLibrary.push(...newBook);
}

function readLibrary() {
    for(let book of myLibrary) {
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
        document.querySelector('main').appendChild(card);
    }
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 255, false);
let anabasisOfAlexander =  new Book("The Anabasis of Alexander", "Xenophon", 281, false);
let prince = new Book("The Prince", "Niccolo Machiavelli", 164, false);
let lawsOfPower = new Book("The 48 Laws of Power", "Robert Greene", 496, false);
addToLibrary([theHobbit, anabasisOfAlexander, prince, lawsOfPower]);
readLibrary();

const addBook = document.querySelector('body>button:nth-child(2)');
const form = document.querySelector('form');
const mask = document.querySelector('.mask');
const submitButton = document.querySelector('form button');
addBook.addEventListener('mousedown', (e) => {
    form.style.display = 'grid';
    mask.style.display = 'block';
})
mask.addEventListener('mousedown', (e) => {
    form.style.display = 'none';
    mask.style.display = 'none';
})