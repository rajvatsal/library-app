export default class Library {
	#books = [];
	add(newBook) {
		this.#books.push(newBook);
	}
	getBooks() {
		return this.#books;
	}
}
