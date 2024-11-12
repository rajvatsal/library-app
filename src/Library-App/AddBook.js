// This module exports event listner for adding books

import removeRequiredPopup from "./RemoveRequiredPopup.js";
import isInvalid from "./ConstraintValidation.js";
import { emit } from "../Utilities/PubSub.js";

const form = document.querySelector("form");
const dialog = document.querySelector("dialog");
const title = document.getElementById("book_title");
const author = document.getElementById("book_author");
const pages = document.getElementById("book_pages");

title.addEventListener("input", removeRequiredPopup);
author.addEventListener("input", removeRequiredPopup);
pages.addEventListener("input", removeRequiredPopup);

export default function addBookClickHandler() {
	e.preventDefault();
	const read = document.getElementById("book_read").checked;
	if (
		isInvalid(title, "Book") ||
		isInvalid(author, "Author") ||
		isInvalid(pages, "Number of pages")
	)
		return;
	emit("AddBookPre", { title, author, pages, read });
	form.reset();
	dialog.close();
}
