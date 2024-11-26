import Book from "./Book.js";

export default class Library {
	#books = [];
	add({ title, author, pages, read }) {
		this.#books.push(new Book(title, author, pages, read));
	}
	getBooks() {
		return this.#books.slice(0);
	}
	removeBook(i) {
		this.#books.splice(i, 1);
	}
	toggleStatus(i) {
		const book = this.#books[i];
		book.read = !book.read === true;
		return book.read;
	}

	getBook(i) {
		return this.#books[i];
	}
}
