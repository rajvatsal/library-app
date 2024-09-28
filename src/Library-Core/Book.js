export default class Book {
	#title;
	#author;
	#pages;
	#read;
	constructor(title, author, pages, read) {
		this.#title = title;
		this.#author = author;
		this.#pages = pages;
		this.#read = read;
	}

	info() {
		return `${this.#title} by ${this.#author}, ${this.#pages} pages, ${
			this.#read ? "completed" : "not completed yet"
		}.`;
	}
	changeStatus() {
		this.#read = !this.#read === true;
		return this.#read;
	}
}
