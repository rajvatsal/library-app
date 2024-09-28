let previousValue = "";

export default function removeRequiredPopup() {
	if (previousValue === "") this.setCustomValidity("");
	previousValue = this.value;
}
