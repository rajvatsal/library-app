import Book from "../src/Library-Core/Book.js";
import Library from "../src/Library-Core/Library.js";

describe("BOOK MODULE", () => {
	const hp = new Book(
		"Harry Potter And The Philosopher's Stone",
		"J.K. Rowling",
		89,
		false,
	);

	const mastery = new Book("Mastery", "Robert Greene", 20, true);

	test("Test Book Name", () => {
		expect(hp.title).toMatch(/Harry Potter And The Philosopher's Stone/);
		expect(mastery.title).toMatch(/Mastery/);
	});
	test("Test Book Author Name", () => {
		expect(hp.author).toMatch(/J.K. Rowling/);
		expect(mastery.author).toMatch(/Robert Greene/);
	});
	test("Test Book Page Numbers", () => {
		expect(hp.pages).toBe(89);
		expect(mastery.pages).toBe(20);
	});
	test("Test Book Status", () => {
		expect(hp.read).toBe(false);
		expect(mastery.read).toBe(true);
	});
});

describe("LIBRARY MODULE", () => {
	const lib = new Library();
	const ce = {
		title: "the cuckoo's egg",
		author: "clifford stoll",
		pages: 50,
		read: true,
	};
	const ag = {
		title: "the assassin's gate",
		author: "george packer",
		pages: 21,
		read: false,
	};

	lib.add(ce);
	lib.add(ag);

	const cuckooEgg = lib.getBooks()[0];
	const assassinGate = lib.getBooks()[1];

	test("Add Book", () => {
		expect(cuckooEgg).toEqual(ce);
		expect(assassinGate).toEqual(ag);
	});

	test("Toggle Status", () => {
		lib.toggleStatus(0);
		lib.toggleStatus(1);
		expect(lib.getBook(0).read).toBe(false);
		expect(lib.getBook(1).read).toBe(true);
	});

	test("Remove Book", () => {
		lib.removeBook(0);
		const books = lib.getBooks();
		expect(books).toEqual([Object.assign({}, ag, { read: true })]);
	});
});
