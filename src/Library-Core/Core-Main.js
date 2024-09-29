import Library from "./LibraryClass.js";
import { emit, on, off } from "../Utilities/PubSub.js";

function retrieveSavedData() {
	const data = window.localStorage.getItem("LibraryApp-Books");
	if (data === "") return;
	const books = JSON.parse(data);
	for (const book of books) {
		lib.add(book);
	}
	emit("StartAppPost", lib.getBooks());
}

function saveData() {
	window.localStorage.setItem(
		"LibraryApp-Books",
		JSON.stringify(lib.getBooks()),
	);
}

function addBookToLibrary({ title, author, pages, read }) {
	const data = {
		title: title.value,
		author: author.value,
		pages: pages.value,
		read,
	};
	lib.add(data);
	emit("AddBookPost", data);
}

function changeBookStatus({ index, target }) {
	const status = lib.toggleStatus(index);
	emit("ToggleStatusPost", { status, target });
}

const lib = new Library();
// Save data before closing window
window.addEventListener("beforeunload", saveData);

on("AddBookPre", addBookToLibrary);
on("ToggleStatusPre", changeBookStatus);
on("StartAppPre", retrieveSavedData);
on("RemoveBookPre", lib.removeBook.bind(lib));
