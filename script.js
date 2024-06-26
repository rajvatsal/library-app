let myLibrary = [];

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}

	info() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
	}
}

function addToLibrary(newBook) {
	myLibrary.push(newBook);
	readLibrary(newBook);
}

function changeCardColor(read, border) {
	if (read) border.classList.add("read");
}

function readLibrary(book) {
	let card = document.createElement("DIV");
	let title = document.createElement("H2");
	let author = document.createElement("H4");
	let pages = document.createElement("H4");
	let read = document.createElement("H4");
	let by = document.createElement("H4");
	let remove = document.createElement("span");
	let container = document.createElement("DIV");
	let border = document.createElement("DIV");
	container.classList.add("cont");
	border.classList.add("bor");
	remove.classList.add("remove");
	author.classList.add("author");
	pages.classList.add("pages");
	title.textContent = book.title;
	by.textContent = `by`;
	author.textContent = `${book.author}`;
	pages.textContent = `${book.pages}`;
	changeCardColor(book.read, border);
	container.appendChild(border);
	container.appendChild(card);
	card.appendChild(title);
	card.appendChild(by);
	card.appendChild(author);
	card.appendChild(pages);
	card.appendChild(read);
	card.appendChild(remove);
	card.style.position = "relative";
	card.classList.add("card");
	container.addEventListener("mousedown", (e) => {
		if (e.target.classList.contains("remove")) e.currentTarget.remove();
		else e.currentTarget.querySelector(".bor").classList.toggle("read");
	});
	document.querySelector("main").prepend(container);
}

const addBook = document.querySelector("main button:not(.remove)");
const form = document.querySelector("form");
const submitButton = document.querySelector("form button");
const body = document.querySelector("body");
const dialog = document.querySelector("dialog");
const formRemove = document.querySelector("form :first-child");
const root = document.querySelector(":root");
const themeChange = document.querySelector(".theme");
const title = document.getElementById("book_title");
const author = document.getElementById("book_author");
const pages = document.getElementById("book_pages");

themeChange.addEventListener("click", (e) => {
	root.classList.toggle("dark");
});

formRemove.addEventListener("click", (e) => {
	dialog.close();
});

addBook.addEventListener("click", (e) => {
	dialog.showModal();
});

function doStuff(title, author, pages) {
	let book = new Book(title.value, author.value, pages.value, read);
	addToLibrary(book);
	form.reset();
	dialog.close();
}

let previousValue = "";

function removeRequiredPopup() {
	if (previousValue === "") this.setCustomValidity("");
	previousValue = this.value;
}

title.addEventListener("input", removeRequiredPopup);
author.addEventListener("input", removeRequiredPopup);
pages.addEventListener("input", removeRequiredPopup);

submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	let read = document.getElementById("book_read").checked;
	if (
		isInvalid(title, "Book") ||
		isInvalid(author, "Author") ||
		isInvalid(pages, "Number of pages")
	)
		return;
	doStuff(title, author, pages);
});

/*let anaAlex = new Book("Anabasis of Alexander", "Xenophon", 238, false);
addToLibrary(anaAlex);*/
