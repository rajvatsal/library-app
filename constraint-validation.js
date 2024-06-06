function isInvalid(ip, message) {
	let state;
	if (ip.validity.valueMissing) {
		ip.setCustomValidity(`${message} name is required`);
		state = true;
	} else {
		ip.setCustomValidity("");
		state = false;
	}

	ip.reportValidity();
	return state;
}
