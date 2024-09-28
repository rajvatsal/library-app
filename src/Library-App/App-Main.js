import displayBook from "./DisplayBook.js";
import { emit, on, off } from "../Utilities/PubSub.js";
import "./AddBook.js";

// Toogle theme
const root = document.querySelector(":root");
const themeChange = document.querySelector(".theme");
themeChange.addEventListener("click", () => {
	root.classList.toggle("dark");
});

// Toggle dialog
const dialog = document.querySelector("dialog");
const formRemove = document.querySelector("form :first-child");
formRemove.addEventListener("click", () => {
	dialog.close();
});

const addBook = document.querySelector("main button:not(.remove)");
addBook.addEventListener("click", () => {
	dialog.showModal();
});

on("AddBookPost", displayBook);
