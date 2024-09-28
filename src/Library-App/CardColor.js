import { emit, on, off } from "../Utilities/PubSub.js";

export default function toggleStatus({ status, target }) {
	if (status === true) target.classList.add("read");
	else target.classList.remove("read");
}

on("ToggleStatusPost", toggleStatus);
