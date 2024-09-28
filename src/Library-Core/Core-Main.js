import Book from "./Book.js";
import Library from "./LibraryClass.js";
import { emit, on, off } from "../Utilities/PubSub.js";

const lib = new Library();

function addBookToLibrary({ title, author, pages, read }) {
	const book = new Book(title.value, author.value, pages.value, read);
	lib.add(book);
	emit("AddBookPost", {
		title: title.value,
		author: author.value,
		pages: pages.value,
		read,
	});
}

function changeBookStatus({ index, target }) {
	const status = lib.getBooks()[index].changeStatus();
	emit("ToggleStatusPost", { status, target });
}

on("AddBookPre", addBookToLibrary);
on("ToggleStatusPre", changeBookStatus);
