import showStatus from "./CardColor.js";
import { emit, on, off } from "../Utilities/PubSub.js";

const main = document.querySelector("main");

export default function displayBook({ title, author, pages, read }) {
	const containerHTML = `
  <div class="cont">
    <div class="bor"></div>
    <div class="card" style="position: relative;">
      <h2>${title}</h2>
      <h4>by</h4>
      <h4 class="author">${author}</h4>
      <h4 class="pages">${pages}</h4>
      <h4></h4>
      <span class="remove"></span>
    </div>
  </div>
`;

	// Insert the HTML into the main element
	main.insertAdjacentHTML("afterbegin", containerHTML);
	const container = document.querySelector("main .cont:first-child");

	// Change the border color based on read status
	const border = container.querySelector(".bor");
	showStatus({ status: read, target: border });

	// Add event listeners
	container.addEventListener("mousedown", (e) => {
		if (e.target.classList.contains("remove")) {
			e.currentTarget.remove();
		} else {
			const books = [...document.getElementsByClassName("cont")];
			const index = books.indexOf(e.currentTarget);
			emit("ToggleStatusPre", { index, target: border });
		}
	});
}
